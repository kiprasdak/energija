package keeper

import (
	"context"
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) CancelBuyOrder(goCtx context.Context, msg *types.MsgCancelBuyOrder) (*types.MsgCancelBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairIndex := types.OrderBookIndex(msg.AmountDenom, msg.PriceDenom)
	b, isFound := k.GetBuyOrderBook(ctx, pairIndex)
	if !isFound {
		return &types.MsgCancelBuyOrderResponse{}, errors.New("the pair doesn't exist")
	}
	order, err := b.Book.GetOrderFromID(msg.OrderID)
	if err != nil {
		return &types.MsgCancelBuyOrderResponse{}, err
	}
	if order.Creator != msg.Creator {
		return &types.MsgCancelBuyOrderResponse{}, errors.New("you are not the owner of this order")
	}
	if err := b.Book.RemoveOrderFromID(msg.OrderID); err != nil {
		return &types.MsgCancelBuyOrderResponse{}, err
	}
	k.SetBuyOrderBook(ctx, b)
	seller, err := sdk.AccAddressFromBech32(order.Creator)
	if err != nil {
		return &types.MsgCancelBuyOrderResponse{}, err
	}
	coins := sdk.NewCoins(sdk.NewCoin(msg.PriceDenom, sdk.NewInt(int64(order.Amount*order.Price))))
	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, seller, coins); err != nil {
		return &types.MsgCancelBuyOrderResponse{}, err
	}

	return &types.MsgCancelBuyOrderResponse{}, nil
}
