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

func (k Keeper) EnergyStoreAll(c context.Context, req *types.QueryAllEnergyStoreRequest) (*types.QueryAllEnergyStoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var energyStores []types.EnergyStore
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	energyStoreStore := prefix.NewStore(store, types.KeyPrefix(types.EnergyStoreKeyPrefix))

	pageRes, err := query.Paginate(energyStoreStore, req.Pagination, func(key []byte, value []byte) error {
		var energyStore types.EnergyStore
		if err := k.cdc.Unmarshal(value, &energyStore); err != nil {
			return err
		}

		energyStores = append(energyStores, energyStore)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEnergyStoreResponse{EnergyStore: energyStores, Pagination: pageRes}, nil
}

func (k Keeper) EnergyStore(c context.Context, req *types.QueryGetEnergyStoreRequest) (*types.QueryGetEnergyStoreResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetEnergyStore(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetEnergyStoreResponse{EnergyStore: val}, nil
}
