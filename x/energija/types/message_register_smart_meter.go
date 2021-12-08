package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterSmartMeter{}

func NewMsgRegisterSmartMeter(creator string, production int32, consumption int32, description string) *MsgRegisterSmartMeter {
	return &MsgRegisterSmartMeter{
		Creator:     creator,
		Production:  production,
		Consumption: consumption,
		Description: description,
	}
}

func (msg *MsgRegisterSmartMeter) Route() string {
	return RouterKey
}

func (msg *MsgRegisterSmartMeter) Type() string {
	return "RegisterSmartMeter"
}

func (msg *MsgRegisterSmartMeter) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterSmartMeter) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterSmartMeter) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
