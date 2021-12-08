package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/kiprasdak/energija/x/energija/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SmartMeterAll(c context.Context, req *types.QueryAllSmartMeterRequest) (*types.QueryAllSmartMeterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var smartMeters []types.SmartMeter
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	smartMeterStore := prefix.NewStore(store, types.KeyPrefix(types.SmartMeterKeyPrefix))

	pageRes, err := query.Paginate(smartMeterStore, req.Pagination, func(key []byte, value []byte) error {
		var smartMeter types.SmartMeter
		if err := k.cdc.Unmarshal(value, &smartMeter); err != nil {
			return err
		}

		smartMeters = append(smartMeters, smartMeter)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSmartMeterResponse{SmartMeter: smartMeters, Pagination: pageRes}, nil
}

func (k Keeper) SmartMeter(c context.Context, req *types.QueryGetSmartMeterRequest) (*types.QueryGetSmartMeterResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSmartMeter(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSmartMeterResponse{SmartMeter: val}, nil
}
