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

func createNSmartMeter(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.SmartMeter {
	items := make([]types.SmartMeter, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetSmartMeter(ctx, items[i])
	}
	return items
}

func TestSmartMeterGet(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNSmartMeter(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetSmartMeter(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestSmartMeterRemove(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNSmartMeter(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveSmartMeter(ctx,
			item.Index,
		)
		_, found := keeper.GetSmartMeter(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestSmartMeterGetAll(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNSmartMeter(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllSmartMeter(ctx))
}
