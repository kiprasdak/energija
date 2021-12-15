package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/kiprasdak/energija/x/energija/types"
)

func (k Keeper) SafeCreateOrder(ctx sdk.Context, creator sdk.AccAddress, amount int32, price int32, amountDenom string, priceDenom string, orderBook interface{}) (int32, error) {
	var id int32
	switch orderBook := orderBook.(type) {
	case types.SellOrderBook:
		coins := sdk.NewCoins(sdk.NewCoin(amountDenom, sdk.NewInt(int64(amount))))
		if err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coins); err != nil {
			return -1, err
		}
		sellId, err := k.createOrder(ctx, creator, amount, price, orderBook)
		id = sellId
		if err != nil {
			return -1, err
		}
	case types.BuyOrderBook:
		coins := sdk.NewCoins(sdk.NewCoin(priceDenom, sdk.NewInt(int64(price*amount))))
		if err := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coins); err != nil {
			return -1, err
		}
		buyId, err := k.createOrder(ctx, creator, amount, price, orderBook)
		id = buyId
		if err != nil {
			return -1, err
		}
	}
	return id, nil
}

func (k Keeper) createOrder(ctx sdk.Context, creator sdk.AccAddress, amount int32, price int32, orderBook interface{}) (int32, error) {
	var id int32
	switch orderBook := orderBook.(type) {
	case types.SellOrderBook:
		sellId, err := orderBook.AppendOrder(creator.String(), amount, price)
		id = sellId
		if err != nil {
			return -1, err
		}
		k.SetSellOrderBook(ctx, orderBook)
	case types.BuyOrderBook:
		buyId, err := orderBook.AppendOrder(creator.String(), amount, price)
		id = buyId
		if err != nil {
			return -1, err
		}
		k.SetBuyOrderBook(ctx, orderBook)
	default:
		return -1, sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unsupported order book type: %T", orderBook)
	}
	return id, nil
}

func (k Keeper) ProcessSellOrder(ctx sdk.Context, pairIndex string, creator string, amount int32, price int32, id int32) error {
	book, isFound := k.GetBuyOrderBook(ctx, pairIndex)
	if !isFound {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "buy order book not found for pair %s", pairIndex)
	}
	// if order book is empty, don't process sell order
	if len(book.Book.Orders) == 0 {
		return nil
	}
	remainingSellOrder, liquidation, totalPurchase, filed := book.FillSellOrder(types.Order{
		Creator: creator,
		Amount:  amount,
		Price:   price,
	})

	sellOrderBook, _ := k.GetSellOrderBook(ctx, pairIndex)
	if remainingSellOrder.Amount > 0 {
		_, err := sellOrderBook.AppendOrder(remainingSellOrder.Creator, remainingSellOrder.Amount, remainingSellOrder.Price)
		if err != nil {
			return err
		}
		for i, order := range sellOrderBook.Book.Orders {
			if order.Id == id {
				sellOrderBook.Book.Orders[i] = sellOrderBook.Book.Orders[len(sellOrderBook.Book.Orders)-1]
				sellOrderBook.Book.Orders = sellOrderBook.Book.Orders[:len(sellOrderBook.Book.Orders)-1]
			}
		}
		k.SetSellOrderBook(ctx, sellOrderBook)
	}
	if remainingSellOrder.Amount == 0 {
		for i, order := range sellOrderBook.Book.Orders {
			if order.Id == id {
				sellOrderBook.Book.Orders[i] = sellOrderBook.Book.Orders[len(sellOrderBook.Book.Orders)-1]
				sellOrderBook.Book.Orders = sellOrderBook.Book.Orders[:len(sellOrderBook.Book.Orders)-1]
			}
		}
		k.SetSellOrderBook(ctx, sellOrderBook)
	}
	if totalPurchase > 0 {
		creatorAddr, _ := sdk.AccAddressFromBech32(creator)
		coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(totalPurchase))))
		if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAddr, coins); err != nil {
			return err
		}
	}
	for _, liquidation := range liquidation {
		liquidation := liquidation
		creatorAddr, _ := sdk.AccAddressFromBech32(liquidation.Creator)
		coins := sdk.NewCoins(sdk.NewCoin(book.AmountDenom, sdk.NewInt(int64(liquidation.Amount))))
		if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAddr, coins); err != nil {
			return err
		}
		k.TransferEnergy(ctx, liquidation.Amount, liquidation.Creator, creator)
	}

	_ = remainingSellOrder
	_ = liquidation
	_ = totalPurchase
	_ = filed

	k.SetBuyOrderBook(ctx, book)
	return nil
}

func (k Keeper) ProcessBuyOrder(ctx sdk.Context, pairIndex string, creator string, amount int32, price int32, id int32) error {
	book, isFound := k.GetSellOrderBook(ctx, pairIndex)
	if !isFound {
		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "buy order book not found for pair %s", pairIndex)
	}
	// if order book is empty, don't process sell order
	if len(book.Book.Orders) == 0 {
		return nil
	}
	remainingBuyOrder, liquidation, totalPurchase, filed := book.FillBuyOrder(types.Order{
		Creator: creator,
		Amount:  amount,
		Price:   price,
	})

	buyOrderBook, _ := k.GetBuyOrderBook(ctx, pairIndex)

	if remainingBuyOrder.Amount > 0 {
		_, err := buyOrderBook.AppendOrder(remainingBuyOrder.Creator, remainingBuyOrder.Amount, remainingBuyOrder.Price)
		if err != nil {
			return err
		}
		for i, order := range buyOrderBook.Book.Orders {
			if order.Id == id {
				buyOrderBook.Book.Orders[i] = buyOrderBook.Book.Orders[len(buyOrderBook.Book.Orders)-1]
				buyOrderBook.Book.Orders = buyOrderBook.Book.Orders[:len(buyOrderBook.Book.Orders)-1]
			}
		}
		k.SetBuyOrderBook(ctx, buyOrderBook)
	}
	if remainingBuyOrder.Amount == 0 {
		for i, order := range buyOrderBook.Book.Orders {
			if order.Id == id {
				buyOrderBook.Book.Orders[i] = buyOrderBook.Book.Orders[len(buyOrderBook.Book.Orders)-1]
				buyOrderBook.Book.Orders = buyOrderBook.Book.Orders[:len(buyOrderBook.Book.Orders)-1]
			}
		}
		k.SetBuyOrderBook(ctx, buyOrderBook)
	}
	if totalPurchase > 0 {
		creatorAddr, _ := sdk.AccAddressFromBech32(creator)
		coins := sdk.NewCoins(sdk.NewCoin(buyOrderBook.AmountDenom, sdk.NewInt(int64(totalPurchase))))
		if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAddr, coins); err != nil {
			return err
		}
	}
	for _, liquidation := range liquidation {
		liquidation := liquidation
		creatorAddr, _ := sdk.AccAddressFromBech32(liquidation.Creator)
		// coins := sdk.NewCoins(sdk.NewCoin(book.PriceDenom, sdk.NewInt(int64(liquidation.Amount*liquidation.Price))))
		coins := sdk.NewCoins(sdk.NewCoin(book.PriceDenom, sdk.NewInt(int64(liquidation.Amount*remainingBuyOrder.Price))))
		if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creatorAddr, coins); err != nil {
			return err
		}
		k.TransferEnergy(ctx, liquidation.Amount, creator, liquidation.Creator)
	}
	_ = remainingBuyOrder
	_ = liquidation
	_ = totalPurchase
	_ = filed

	k.SetSellOrderBook(ctx, book)
	return nil
}

// func (k Keeper) SafeFillOrder(ctx sdk.Context, creator sdk.AccAddress, amount int32, price int32, amountDenom string, priceDenom string, orderBook interface{}) error {
// 	pairIndex := types.OrderBookIndex(amountDenom, priceDenom)
// 	switch orderBook := orderBook.(type) {
// 	case types.SellOrderBook:
// 		if err := k.fillOrder(ctx, creator, amount, price, pairIndex, orderBook); err != nil {
// 			return err
// 		}
// 	case types.BuyOrderBook:
// 		if err := k.fillOrder(ctx, creator, amount, price, pairIndex, orderBook); err != nil {
// 			return err
// 		}
// 	default:
// 		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unsupported order book type: %T", orderBook)
// 	}
// 	return nil
// }

// func (k Keeper) fillOrder(ctx sdk.Context, creator sdk.AccAddress, amount int32, price int32, pairIndex string, orderBook interface{}) error {
// 	switch orderBook := orderBook.(type) {
// 	case types.SellOrderBook:
// 		buyOrderBook, isFound := k.GetBuyOrderBook(ctx, pairIndex)
// 		if !isFound {
// 			return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "pair doesn't exist")
// 		}
// 		remaining, liquidated, gain, _ := buyOrderBook.FillSellOrder(types.Order{
// 			Amount: amount,
// 			Price:  price,
// 		})

// 		remainingAmount := remaining.Amount

// 		for _, liquidation := range liquidated {
// 			liquidation := liquidation
// 			addr, err := sdk.AccAddressFromBech32(liquidation.Creator)
// 			if err != nil {
// 				return err
// 			}
// 			coins := sdk.NewCoins(sdk.NewCoin(buyOrderBook.AmountDenom, sdk.NewInt(int64(liquidation.Amount))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, coins); err != nil {
// 				return err
// 			}
// 		}
// 		k.SetBuyOrderBook(ctx, buyOrderBook)

// 		sellOrderBook := orderBook
// 		if remainingAmount > 0 {
// 			// _ = sellOrderBook.Book.Orders[:len(sellOrderBook.Book.Orders)-1]
// 			_, err := sellOrderBook.AppendOrder(creator.String(), remainingAmount, price)
// 			if err != nil {
// 				return err
// 			}
// 		}
// 		if gain > 0 {
// 			coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(gain))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, creator, coins); err != nil {
// 				return err
// 			}
// 			k.SetSellOrderBook(ctx, sellOrderBook)
// 		}

// 		//======
// 		if !isFound {
// 			return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "pair doesn't exist")
// 		}
// 		sremaining, sliquidated, spurchase, _ := sellOrderBook.FillBuyOrder(types.Order{
// 			Amount: amount,
// 			Price:  price,
// 		})
// 		var sliquidation types.Order
// 		sremainingAmount := sremaining.Amount
// 		for _, sliquidation = range sliquidated {
// 			sliquidation := sliquidation
// 			addr, err := sdk.AccAddressFromBech32(sliquidation.Creator)
// 			if err != nil {
// 				return err
// 			}
// 			coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(sliquidation.Amount*sliquidation.Price))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, coins); err != nil {
// 				return err
// 			}
// 		}
// 		k.SetSellOrderBook(ctx, sellOrderBook)

// 		if sremainingAmount > 0 {
// 			_, err := buyOrderBook.AppendOrder(sliquidation.Creator, sremainingAmount, price)
// 			if err != nil {
// 				return err
// 			}
// 		}
// 		if spurchase > 0 {
// 			coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(spurchase))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, sdk.AccAddress(sliquidation.Creator), coins); err != nil {
// 				return err
// 			}
// 			k.SetBuyOrderBook(ctx, buyOrderBook)
// 		}
// 		//======

// 	case types.BuyOrderBook:
// 		sellOrderBook, isFound := k.GetSellOrderBook(ctx, pairIndex)
// 		if !isFound {
// 			return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "pair doesn't exist")
// 		}
// 		remaining, liquidated, purchase, _ := sellOrderBook.FillBuyOrder(types.Order{
// 			Amount: amount,
// 			Price:  price,
// 		})
// 		var liquidation types.Order
// 		remainingAmount := remaining.Amount
// 		for _, liquidation = range liquidated {
// 			liquidation := liquidation
// 			addr, err := sdk.AccAddressFromBech32(liquidation.Creator)
// 			if err != nil {
// 				return err
// 			}
// 			coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(liquidation.Amount*liquidation.Price))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, coins); err != nil {
// 				return err
// 			}
// 		}
// 		k.SetSellOrderBook(ctx, sellOrderBook)

// 		buyOrderBook := orderBook
// 		if remainingAmount > 0 {
// 			_, err := buyOrderBook.AppendOrder(liquidation.Creator, remainingAmount, price)
// 			if err != nil {
// 				return err
// 			}
// 		}
// 		if purchase > 0 {
// 			coins := sdk.NewCoins(sdk.NewCoin(sellOrderBook.PriceDenom, sdk.NewInt(int64(purchase))))
// 			if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, sdk.AccAddress(liquidation.Creator), coins); err != nil {
// 				return err
// 			}
// 			k.SetBuyOrderBook(ctx, buyOrderBook)
// 		}
// 	default:
// 		return sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unsupported order book type: %T", orderBook)
// 	}
// 	return nil
// }
