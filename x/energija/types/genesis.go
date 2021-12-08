package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SmartMeterList:    []SmartMeter{},
		EnergyStoreList:   []EnergyStore{},
		BuyOrderBookList:  []BuyOrderBook{},
		SellOrderBookList: []SellOrderBook{},
		// this line is used by starport scaffolding # genesis/types/default
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in smartMeter
	smartMeterIndexMap := make(map[string]struct{})

	for _, elem := range gs.SmartMeterList {
		index := string(SmartMeterKey(elem.Index))
		if _, ok := smartMeterIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for smartMeter")
		}
		smartMeterIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in energyStore
	energyStoreIndexMap := make(map[string]struct{})

	for _, elem := range gs.EnergyStoreList {
		index := string(EnergyStoreKey(elem.Index))
		if _, ok := energyStoreIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for energyStore")
		}
		energyStoreIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in buyOrderBook
	buyOrderBookIndexMap := make(map[string]struct{})

	for _, elem := range gs.BuyOrderBookList {
		index := string(BuyOrderBookKey(elem.Index))
		if _, ok := buyOrderBookIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for buyOrderBook")
		}
		buyOrderBookIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in sellOrderBook
	sellOrderBookIndexMap := make(map[string]struct{})

	for _, elem := range gs.SellOrderBookList {
		index := string(SellOrderBookKey(elem.Index))
		if _, ok := sellOrderBookIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for sellOrderBook")
		}
		sellOrderBookIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return nil
}
