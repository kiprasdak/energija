package keeper

import (
	"context"
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) CancelSellOrder(goCtx context.Context, msg *types.MsgCancelSellOrder) (*types.MsgCancelSellOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairIndex := types.OrderBookIndex(msg.AmountDenom, msg.PriceDenom)
	s, isFound := k.GetSellOrderBook(ctx, pairIndex)
	if !isFound {
		return &types.MsgCancelSellOrderResponse{}, errors.New("the pair doesn't exist")
	}
	order, err := s.Book.GetOrderFromID(msg.OrderID)
	if err != nil {
		return &types.MsgCancelSellOrderResponse{}, err
	}
	if order.Creator != msg.Creator {
		return &types.MsgCancelSellOrderResponse{}, errors.New("you are not the owner of this order")
	}
	if err := s.Book.RemoveOrderFromID(msg.OrderID); err != nil {
		return &types.MsgCancelSellOrderResponse{}, err
	}
	k.SetSellOrderBook(ctx, s)

	seller, err := sdk.AccAddressFromBech32(order.Creator)
	if err != nil {
		return &types.MsgCancelSellOrderResponse{}, err
	}
	coins := sdk.NewCoins(sdk.NewCoin(msg.AmountDenom, sdk.NewInt(int64(order.Amount))))
	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, seller, coins); err != nil {
		return &types.MsgCancelSellOrderResponse{}, err
	}

	return &types.MsgCancelSellOrderResponse{}, nil
}
