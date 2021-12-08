package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) CreatePair(goCtx context.Context, msg *types.MsgCreatePair) (*types.MsgCreatePairResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairIndex := types.OrderBookIndex(msg.SourceDenom, msg.TargetDenom)
	_, isFound := k.GetSellOrderBook(ctx, pairIndex)
	if isFound {
		return &types.MsgCreatePairResponse{}, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "the pair already exist")
	}

	_, isFound = k.GetBuyOrderBook(ctx, pairIndex)
	if isFound {
		return &types.MsgCreatePairResponse{}, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "the pair already exist")
	}

	buyBook := types.NewBuyOrderBook(msg.SourceDenom, msg.TargetDenom)
	sellBook := types.NewSellOrderBook(msg.SourceDenom, msg.TargetDenom)
	buyBook.Index, sellBook.Index = pairIndex, pairIndex

	k.SetBuyOrderBook(ctx, buyBook)
	k.SetSellOrderBook(ctx, sellBook)

	return &types.MsgCreatePairResponse{}, nil
}
