package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/types"
)

// SetEnergyStore set a specific energyStore in the store from its index
func (k Keeper) SetEnergyStore(ctx sdk.Context, energyStore types.EnergyStore) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EnergyStoreKeyPrefix))
	b := k.cdc.MustMarshal(&energyStore)
	store.Set(types.EnergyStoreKey(
		energyStore.Index,
	), b)
}

// GetEnergyStore returns a energyStore from its index
func (k Keeper) GetEnergyStore(
	ctx sdk.Context,
	index string,

) (val types.EnergyStore, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EnergyStoreKeyPrefix))

	b := store.Get(types.EnergyStoreKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveEnergyStore removes a energyStore from the store
func (k Keeper) RemoveEnergyStore(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EnergyStoreKeyPrefix))
	store.Delete(types.EnergyStoreKey(
		index,
	))
}

// GetAllEnergyStore returns all energyStore
func (k Keeper) GetAllEnergyStore(ctx sdk.Context) (list []types.EnergyStore) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EnergyStoreKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.EnergyStore
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
