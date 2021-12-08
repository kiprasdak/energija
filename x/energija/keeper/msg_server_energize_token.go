package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) EnergizeToken(goCtx context.Context, msg *types.MsgEnergizeToken) (*types.MsgEnergizeTokenResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	energyStore, isFound := k.GetEnergyStore(ctx, msg.Creator)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "energy store is not found")
	}

	reserved := energyStore.Reserved
	creatorAddr, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid address")
	}

	if reserved < msg.Amount {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not enough energy reserved")
	} else {
		if err := k.UnreserveEnergy(ctx, msg.Creator, msg.Amount); err != nil {
			return nil, err
		}

		if err := k.SafeBurn(ctx, creatorAddr, types.TokenDenom, msg.Amount); err != nil {
			return nil, err
		}
	}

	return &types.MsgEnergizeTokenResponse{}, nil
}
