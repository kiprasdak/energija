package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/kiprasdak/energija/testutil/keeper"
	"github.com/kiprasdak/energija/x/energija/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestEnergyStoreQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNEnergyStore(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetEnergyStoreRequest
		response *types.QueryGetEnergyStoreResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetEnergyStoreRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetEnergyStoreResponse{EnergyStore: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetEnergyStoreRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetEnergyStoreResponse{EnergyStore: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetEnergyStoreRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.InvalidArgument, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.EnergyStore(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.Equal(t, tc.response, response)
			}
		})
	}
}

func TestEnergyStoreQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.EnergijaKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNEnergyStore(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllEnergyStoreRequest {
		return &types.QueryAllEnergyStoreRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.EnergyStoreAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.EnergyStore), step)
			require.Subset(t, msgs, resp.EnergyStore)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.EnergyStoreAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.EnergyStore), step)
			require.Subset(t, msgs, resp.EnergyStore)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.EnergyStoreAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.EnergyStoreAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
