package energija

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/keeper"
	"github.com/kiprasdak/energija/x/energija/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the smartMeter
	for _, elem := range genState.SmartMeterList {
		k.SetSmartMeter(ctx, elem)
	}
	// Set all the energyStore
	for _, elem := range genState.EnergyStoreList {
		k.SetEnergyStore(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.SmartMeterList = k.GetAllSmartMeter(ctx)
	genesis.EnergyStoreList = k.GetAllEnergyStore(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
