package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) SellOrder(goCtx context.Context, msg *types.MsgSellOrder) (*types.MsgSellOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairIndex := types.OrderBookIndex(msg.AmountDenom, msg.PriceDenom)
	sellOrderBook, isFound := k.GetSellOrderBook(ctx, pairIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "pair doesn't exist")
	}

	creatorAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid address")
	}

	id, err := k.SafeCreateOrder(ctx, creatorAddr, msg.Amount, msg.Price, msg.AmountDenom, msg.PriceDenom, sellOrderBook)
	if err != nil {
		return nil, err
	}

	if err := k.ProcessSellOrder(ctx, pairIndex, msg.Creator, msg.Amount, msg.Price, id); err != nil {
		return nil, err
	}

	return &types.MsgSellOrderResponse{}, nil
}
