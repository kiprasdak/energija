package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRegisterSmartMeter{}, "energija/RegisterSmartMeter", nil)
	cdc.RegisterConcrete(&MsgRegisterEnergyStore{}, "energija/RegisterEnergyStore", nil)
	cdc.RegisterConcrete(&MsgTokenizeEnergy{}, "energija/TokenizeEnergy", nil)
	cdc.RegisterConcrete(&MsgCreatePair{}, "energija/CreatePair", nil)
	cdc.RegisterConcrete(&MsgSellOrder{}, "energija/SellOrder", nil)
	cdc.RegisterConcrete(&MsgBuyOrder{}, "energija/BuyOrder", nil)
	cdc.RegisterConcrete(&MsgCancelBuyOrder{}, "energija/CancelBuyOrder", nil)
	cdc.RegisterConcrete(&MsgCancelSellOrder{}, "energija/CancelSellOrder", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterSmartMeter{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegisterEnergyStore{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgTokenizeEnergy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePair{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSellOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuyOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancelBuyOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCancelSellOrder{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
