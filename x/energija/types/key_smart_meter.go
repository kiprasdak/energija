package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// SmartMeterKeyPrefix is the prefix to retrieve all SmartMeter
	SmartMeterKeyPrefix = "SmartMeter/value/"
)

// SmartMeterKey returns the store key to retrieve a SmartMeter from the index fields
func SmartMeterKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
