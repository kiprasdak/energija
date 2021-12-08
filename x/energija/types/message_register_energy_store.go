package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRegisterEnergyStore{}

func NewMsgRegisterEnergyStore(creator string, description string) *MsgRegisterEnergyStore {
	return &MsgRegisterEnergyStore{
		Creator:     creator,
		Description: description,
	}
}

func (msg *MsgRegisterEnergyStore) Route() string {
	return RouterKey
}

func (msg *MsgRegisterEnergyStore) Type() string {
	return "RegisterEnergyStore"
}

func (msg *MsgRegisterEnergyStore) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRegisterEnergyStore) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegisterEnergyStore) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
