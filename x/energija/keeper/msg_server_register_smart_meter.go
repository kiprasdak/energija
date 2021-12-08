package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k msgServer) RegisterSmartMeter(goCtx context.Context, msg *types.MsgRegisterSmartMeter) (*types.MsgRegisterSmartMeterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	smartMeter := types.SmartMeter{
		Index:       msg.Creator,
		Production:  msg.Production,
		Consumption: msg.Consumption,
		Description: msg.Description,
	}

	_, isFound := k.GetSmartMeter(ctx, smartMeter.Index)

	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "smart meter already registered by user")
	} else {
		k.SetSmartMeter(ctx, smartMeter)
	}

	return &types.MsgRegisterSmartMeterResponse{}, nil
}
