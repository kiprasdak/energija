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

func createNBuyOrderBook(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.BuyOrderBook {
	items := make([]types.BuyOrderBook, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetBuyOrderBook(ctx, items[i])
	}
	return items
}

func TestBuyOrderBookGet(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNBuyOrderBook(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuyOrderBook(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestBuyOrderBookRemove(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNBuyOrderBook(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuyOrderBook(ctx,
			item.Index,
		)
		_, found := keeper.GetBuyOrderBook(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestBuyOrderBookGetAll(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	items := createNBuyOrderBook(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllBuyOrderBook(ctx))
}
