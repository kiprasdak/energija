package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/kiprasdak/energija/x/energija/types"
)

func isWatth(denom string) bool {
	return denom == types.TokenDenom
}

func (k Keeper) SafeMint(ctx sdk.Context, receiver sdk.AccAddress, denom string, amount int32) error {
	if isWatth(denom) {
		if err := k.mintTokens(ctx, receiver, sdk.NewCoin(denom, sdk.NewInt(int64(amount)))); err != nil {
			return err
		}
	} else {
		panic(fmt.Sprintf("unsupported denom: %s", denom))
	}
	return nil
}

func (k Keeper) mintTokens(ctx sdk.Context, receiver sdk.AccAddress, tokens sdk.Coin) error {
	// return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "mint.go mintTokens")
	if err := k.bankKeeper.MintCoins(ctx, types.ModuleName, sdk.NewCoins(tokens)); err != nil {
		return err
	}
	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, sdk.NewCoins(tokens)); err != nil {
		panic(fmt.Sprintf("unable to send coins from module to account despite previously minting coins to module account: %v", err))
	}
	return nil
}

// func (k Keeper) SafeLock(ctx sdk.Context, sender sdk.AccAddress, denom string, amount int32) error {
// 	if isWatth(denom) {
// 		if err := k.lockTokens(ctx, sender, sdk.NewCoin(denom, sdk.NewInt(int64(amount)))); err != nil {
// 			return err
// 		}
// 	} else {
// 		panic(fmt.Sprintf("unsupported denom: %s", denom))
// 	}
// 	return nil
// }

// func (k Keeper) lockTokens(ctx sdk.Context, sender sdk.AccAddress, tokens sdk.Coin) error {
// 	if err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, sender, types.ModuleName, sdk.NewCoins(tokens)); err != nil {
// 		return err
// 	}
// 	return nil
// }

// func (k Keeper) SafeUnlock(ctx sdk.Context, sender sdk.AccAddress, denom string, amount int32) error {
// 	if isWatth(denom) {
// 		if err := k.unlockTokens(ctx, sender, sdk.NewCoin(denom, sdk.NewInt(int64(amount)))); err != nil {
// 			return err
// 		}
// 	} else {
// 		panic(fmt.Sprintf("unsupported denom: %s", denom))
// 	}
// 	return nil
// }

// func (k Keeper) unlockTokens(ctx sdk.Context, receiver sdk.AccAddress, tokens sdk.Coin) error {
// 	if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, receiver, sdk.NewCoins(tokens)); err != nil {
// 		return err
// 	}
// 	return nil
// }
