package keeper

import (
	"context"
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) RegisterEnergyStore(goCtx context.Context, msg *types.MsgRegisterEnergyStore) (*types.MsgRegisterEnergyStoreResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	smartMeter, _ := k.GetSmartMeter(ctx, msg.Creator)
	production := smartMeter.Production
	consumption := smartMeter.Consumption
	potential := int32(math.Max(0, float64(production-consumption)))

	energyStore := types.EnergyStore{
		Index:       msg.Creator,
		Stored:      potential,
		Description: msg.Description,
	}

	_, isFound := k.GetEnergyStore(ctx, energyStore.Index)

	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "energy store already registered by user")
	} else {
		k.SetEnergyStore(ctx, energyStore)
	}

	return &types.MsgRegisterEnergyStoreResponse{}, nil
}
