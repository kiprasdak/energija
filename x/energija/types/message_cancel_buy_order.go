package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCancelBuyOrder{}

func NewMsgCancelBuyOrder(creator string, amountDenom string, priceDenom string, orderID int32) *MsgCancelBuyOrder {
	return &MsgCancelBuyOrder{
		Creator:     creator,
		AmountDenom: amountDenom,
		PriceDenom:  priceDenom,
		OrderID:     orderID,
	}
}

func (msg *MsgCancelBuyOrder) Route() string {
	return RouterKey
}

func (msg *MsgCancelBuyOrder) Type() string {
	return "CancelBuyOrder"
}

func (msg *MsgCancelBuyOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCancelBuyOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCancelBuyOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
