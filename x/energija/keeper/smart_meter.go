package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/types"
)

// SetSmartMeter set a specific smartMeter in the store from its index
func (k Keeper) SetSmartMeter(ctx sdk.Context, smartMeter types.SmartMeter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SmartMeterKeyPrefix))
	b := k.cdc.MustMarshal(&smartMeter)
	store.Set(types.SmartMeterKey(
		smartMeter.Index,
	), b)
}

// GetSmartMeter returns a smartMeter from its index
func (k Keeper) GetSmartMeter(
	ctx sdk.Context,
	index string,

) (val types.SmartMeter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SmartMeterKeyPrefix))

	b := store.Get(types.SmartMeterKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveSmartMeter removes a smartMeter from the store
func (k Keeper) RemoveSmartMeter(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SmartMeterKeyPrefix))
	store.Delete(types.SmartMeterKey(
		index,
	))
}

// GetAllSmartMeter returns all smartMeter
func (k Keeper) GetAllSmartMeter(ctx sdk.Context) (list []types.SmartMeter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SmartMeterKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SmartMeter
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
