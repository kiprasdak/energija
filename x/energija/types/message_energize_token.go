package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgEnergizeToken{}

func NewMsgEnergizeToken(creator string, amount int32) *MsgEnergizeToken {
	return &MsgEnergizeToken{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgEnergizeToken) Route() string {
	return RouterKey
}

func (msg *MsgEnergizeToken) Type() string {
	return "EnergizeToken"
}

func (msg *MsgEnergizeToken) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgEnergizeToken) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEnergizeToken) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
