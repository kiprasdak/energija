package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgBuyOrder{}

func NewMsgBuyOrder(creator string, amountDenom string, amount int32, priceDenom string, price int32) *MsgBuyOrder {
	return &MsgBuyOrder{
		Creator:     creator,
		AmountDenom: amountDenom,
		Amount:      amount,
		PriceDenom:  priceDenom,
		Price:       price,
	}
}

func (msg *MsgBuyOrder) Route() string {
	return RouterKey
}

func (msg *MsgBuyOrder) Type() string {
	return "BuyOrder"
}

func (msg *MsgBuyOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
