package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// EnergyStoreKeyPrefix is the prefix to retrieve all EnergyStore
	EnergyStoreKeyPrefix = "EnergyStore/value/"
)

// EnergyStoreKey returns the store key to retrieve a EnergyStore from the index fields
func EnergyStoreKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
