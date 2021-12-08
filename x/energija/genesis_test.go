package energija_test

import (
	"testing"

	keepertest "github.com/kiprasdak/energija/testutil/keeper"
	"github.com/kiprasdak/energija/x/energija"
	"github.com/kiprasdak/energija/x/energija/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		SmartMeterList: []types.SmartMeter{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.EnergijaKeeper(t)
	energija.InitGenesis(ctx, *k, genesisState)
	got := energija.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.SmartMeterList, len(genesisState.SmartMeterList))
	require.Subset(t, genesisState.SmartMeterList, got.SmartMeterList)
	// this line is used by starport scaffolding # genesis/test/assert
}
