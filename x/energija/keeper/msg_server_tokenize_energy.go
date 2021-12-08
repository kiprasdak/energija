package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) TokenizeEnergy(goCtx context.Context, msg *types.MsgTokenizeEnergy) (*types.MsgTokenizeEnergyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyStore, isFound := k.GetEnergyStore(ctx, msg.Creator)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "energy store is not found")
	}

	stored := energyStore.Stored
	creatorAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid address")
	}

	if stored < msg.Amount {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not enough energy stored")
	} else {
		if err := k.ReserveEnergy(ctx, msg.Creator, msg.Amount); err != nil {
			return nil, err
		}

		if err := k.SafeMint(ctx, creatorAddr, types.TokenDenom, msg.Amount); err != nil {
			return nil, err
		}
	}

	return &types.MsgTokenizeEnergyResponse{}, nil
}
