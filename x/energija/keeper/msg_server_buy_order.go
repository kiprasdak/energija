package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) BuyOrder(goCtx context.Context, msg *types.MsgBuyOrder) (*types.MsgBuyOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairIndex := types.OrderBookIndex(msg.AmountDenom, msg.PriceDenom)
	BuyOrderBook, isFound := k.GetBuyOrderBook(ctx, pairIndex)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "pair doesn't exist")
	}

	creatorAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid address")
	}

	id, err := k.SafeCreateOrder(ctx, creatorAddr, msg.Amount, msg.Price, msg.AmountDenom, msg.PriceDenom, BuyOrderBook)
	if err != nil {
		return nil, err
	}

	// if err := k.SafeFillOrder(ctx, creatorAddr, msg.Amount, msg.Price, msg.AmountDenom, msg.PriceDenom, BuyOrderBook); err != nil {
	// 	return nil, err
	// }

	if err := k.ProcessBuyOrder(ctx, pairIndex, msg.Creator, msg.Amount, msg.Price, id); err != nil {
		return nil, err
	}

	return &types.MsgBuyOrderResponse{}, nil
}
