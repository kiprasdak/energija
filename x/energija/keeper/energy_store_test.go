package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/kiprasdak/energija/testutil/keeper"
	"github.com/kiprasdak/energija/x/energija/keeper"
	"github.com/kiprasdak/energija/x/energija/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNEnergyStore(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.EnergyStore {
	items := make([]types.EnergyStore, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetEnergyStore(ctx, items[i])
	}
	return items
}

func TestEnergyStoreGet(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNEnergyStore(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetEnergyStore(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestEnergyStoreRemove(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNEnergyStore(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveEnergyStore(ctx,
			item.Index,
		)
		_, found := keeper.GetEnergyStore(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestEnergyStoreGetAll(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNEnergyStore(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllEnergyStore(ctx))
}
