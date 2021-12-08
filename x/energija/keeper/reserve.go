package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k Keeper) ReserveEnergy(ctx sdk.Context, index string, amount int32) error {
	energyStore, isFound := k.GetEnergyStore(ctx, index)
	if !isFound {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "energy store is not found (reserve.go)")
	}

	stored := energyStore.Stored
	var reserved int32
	if stored < amount {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not enough energy stored (reserve.go)")
	} else if amount == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "amount being reserved can not be zero (reserve.go)")
	} else {
		reserved = amount
	}

	updatedEnergyStore := types.EnergyStore{
		Index:       index,
		Stored:      stored - reserved,
		Reserved:    energyStore.Reserved + reserved,
		Description: energyStore.Description,
	}

	k.SetEnergyStore(ctx, updatedEnergyStore)

	return nil
}

func (k Keeper) UnreserveEnergy(ctx sdk.Context, index string, amount int32) error {
	energyStore, isFound := k.GetEnergyStore(ctx, index)
	if !isFound {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "energy store is not found (reserve.go)")
	}
	reserved := energyStore.Reserved
	var stored int32
	if reserved < amount {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "not enough energy reserved (reserve.go)")
	} else if amount == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "amount being stored can not be zero (reserve.go)")
	} else {
		stored = amount
	}
	updatedEnergyStore := types.EnergyStore{
		Index:       index,
		Stored:      stored,
		Reserved:    energyStore.Reserved - stored,
		Description: energyStore.Description,
	}

	k.SetEnergyStore(ctx, updatedEnergyStore)
	return nil
}
