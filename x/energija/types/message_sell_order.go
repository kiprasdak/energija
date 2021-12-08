package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSellOrder{}

func NewMsgSellOrder(creator string, amountDenom string, amount int32, priceDenom string, price int32) *MsgSellOrder {
	return &MsgSellOrder{
		Creator:     creator,
		AmountDenom: amountDenom,
		Amount:      amount,
		PriceDenom:  priceDenom,
		Price:       price,
	}
}

func (msg *MsgSellOrder) Route() string {
	return RouterKey
}

func (msg *MsgSellOrder) Type() string {
	return "SellOrder"
}

func (msg *MsgSellOrder) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSellOrder) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSellOrder) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
