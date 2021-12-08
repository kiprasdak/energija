package types_test

import (
	"testing"

	"github.com/kiprasdak/energija/x/energija/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				SmartMeterList: []types.SmartMeter{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				EnergyStoreList: []types.EnergyStore{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				BuyOrderBookList: []types.BuyOrderBook{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				SellOrderBookList: []types.SellOrderBook{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated smartMeter",
			genState: &types.GenesisState{
				SmartMeterList: []types.SmartMeter{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated energyStore",
			genState: &types.GenesisState{
				EnergyStoreList: []types.EnergyStore{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated buyOrderBook",
			genState: &types.GenesisState{
				BuyOrderBookList: []types.BuyOrderBook{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sellOrderBook",
			genState: &types.GenesisState{
				SellOrderBookList: []types.SellOrderBook{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
