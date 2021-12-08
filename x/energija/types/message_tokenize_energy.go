package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgTokenizeEnergy{}

func NewMsgTokenizeEnergy(creator string, amount int32) *MsgTokenizeEnergy {
	return &MsgTokenizeEnergy{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgTokenizeEnergy) Route() string {
	return RouterKey
}

func (msg *MsgTokenizeEnergy) Type() string {
	return "TokenizeEnergy"
}

func (msg *MsgTokenizeEnergy) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgTokenizeEnergy) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgTokenizeEnergy) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
