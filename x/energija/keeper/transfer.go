package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k Keeper) TransferEnergy(ctx sdk.Context, amount int32, indexTo string, indexFrom string) error {
	energyStoreTo, isFound := k.GetEnergyStore(ctx, indexTo)
	if !isFound {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "energy store not found")
	}

	updatedEnergyStoreTo := types.EnergyStore{
		Index:       indexTo,
		Stored:      energyStoreTo.Stored,
		Reserved:    energyStoreTo.Reserved + amount,
		Description: energyStoreTo.Description,
	}
	k.SetEnergyStore(ctx, updatedEnergyStoreTo)

	energyStoreFrom, isFound := k.GetEnergyStore(ctx, indexFrom)
	if !isFound {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "energy store not found")
	}

	updatedEnergyStoreFrom := types.EnergyStore{
		Index:       indexFrom,
		Stored:      energyStoreFrom.Stored,
		Reserved:    energyStoreFrom.Reserved - amount,
		Description: energyStoreFrom.Description,
	}
	k.SetEnergyStore(ctx, updatedEnergyStoreFrom)
	return nil
}
