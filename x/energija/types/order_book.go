package types

import (
	"errors"
	"sort"
)

func NewOrderBook() OrderBook {
	return OrderBook{
		IdCount: 0,
	}
}

const (
	MaxAmount = int32(1000000)
	MaxPrice  = int32(1000000)
)

type Ordering int

const (
	Increasing Ordering = iota // iota 1, 2, 3 ...
	Decreasing
)

var (
	ErrMaxAmount     = errors.New("max amount reached")
	ErrMaxPrice      = errors.New("max price reached")
	ErrZeroAmount    = errors.New("amount is zero")
	ErrZeroPrice     = errors.New("price is zero")
	ErrOrderNotFound = errors.New("order not found")
)

func (book *OrderBook) appendOrder(creator string, amount int32, price int32, ordering Ordering) (int32, error) {
	if err := checkAmountAndPrice(amount, price); err != nil {
		return 0, err
	}
	order := Order{
		Id:      book.GetNextOrderID(),
		Creator: creator,
		Amount:  amount,
		Price:   price,
	}
	book.IncrementNextOrderID()
	book.insertOrder(order, ordering)
	return order.Id, nil

}

func checkAmountAndPrice(amount int32, price int32) error {
	if amount == int32(0) {
		return ErrZeroAmount
	}
	if amount > MaxAmount {
		return ErrMaxAmount
	}
	if price == int32(0) {
		return ErrZeroPrice
	}
	if price > MaxPrice {
		return ErrMaxPrice
	}
	return nil
}

func (book OrderBook) GetNextOrderID() int32 {
	return book.IdCount
}

func (book *OrderBook) IncrementNextOrderID() {
	book.IdCount++
}

func (book *OrderBook) insertOrder(order Order, ordering Ordering) {
	if len(book.Orders) > 0 {
		var i int
		if ordering == Increasing {
			i = sort.Search(len(book.Orders), func(i int) bool { return book.Orders[i].Price > order.Price })
		} else {
			i = sort.Search(len(book.Orders), func(i int) bool { return book.Orders[i].Price < order.Price })
		}
		orders := append(book.Orders, &order)
		copy(orders[i+1:], orders[i:])
		orders[i] = &order
		book.Orders = orders
	} else {
		book.Orders = append(book.Orders, &order)
	}
}

func (book OrderBook) GetOrderFromID(id int32) (Order, error) {
	for _, order := range book.Orders {
		if order.Id == id {
			return *order, nil
		}
	}
	return Order{}, ErrOrderNotFound
}

func (book *OrderBook) RemoveOrderFromID(id int32) error {
	for i, order := range book.Orders {
		if order.Id == id {
			book.Orders = append(book.Orders[:i], book.Orders[i+1:]...)
			return nil
		}
	}
	return ErrOrderNotFound
}
