/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "kiprasdak.energija.energija";
const baseMsgRegisterSmartMeter = {
    creator: "",
    production: 0,
    consumption: 0,
    description: "",
};
export const MsgRegisterSmartMeter = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.production !== 0) {
            writer.uint32(16).int32(message.production);
        }
        if (message.consumption !== 0) {
            writer.uint32(24).int32(message.consumption);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterSmartMeter };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.production = reader.int32();
                    break;
                case 3:
                    message.consumption = reader.int32();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegisterSmartMeter };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.production !== undefined && object.production !== null) {
            message.production = Number(object.production);
        }
        else {
            message.production = 0;
        }
        if (object.consumption !== undefined && object.consumption !== null) {
            message.consumption = Number(object.consumption);
        }
        else {
            message.consumption = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.production !== undefined && (obj.production = message.production);
        message.consumption !== undefined &&
            (obj.consumption = message.consumption);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterSmartMeter };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.production !== undefined && object.production !== null) {
            message.production = object.production;
        }
        else {
            message.production = 0;
        }
        if (object.consumption !== undefined && object.consumption !== null) {
            message.consumption = object.consumption;
        }
        else {
            message.consumption = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        return message;
    },
};
const baseMsgRegisterSmartMeterResponse = {};
export const MsgRegisterSmartMeterResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRegisterSmartMeterResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgRegisterSmartMeterResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRegisterSmartMeterResponse,
        };
        return message;
    },
};
const baseMsgRegisterEnergyStore = { creator: "", description: "" };
export const MsgRegisterEnergyStore = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterEnergyStore };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegisterEnergyStore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterEnergyStore };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        return message;
    },
};
const baseMsgRegisterEnergyStoreResponse = {};
export const MsgRegisterEnergyStoreResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRegisterEnergyStoreResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgRegisterEnergyStoreResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRegisterEnergyStoreResponse,
        };
        return message;
    },
};
const baseMsgTokenizeEnergy = { creator: "", amount: 0 };
export const MsgTokenizeEnergy = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== 0) {
            writer.uint32(16).int32(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTokenizeEnergy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgTokenizeEnergy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgTokenizeEnergy };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        return message;
    },
};
const baseMsgTokenizeEnergyResponse = {};
export const MsgTokenizeEnergyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgTokenizeEnergyResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgTokenizeEnergyResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgTokenizeEnergyResponse,
        };
        return message;
    },
};
const baseMsgCreatePair = {
    creator: "",
    sourceDenom: "",
    targetDenom: "",
};
export const MsgCreatePair = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.sourceDenom !== "") {
            writer.uint32(18).string(message.sourceDenom);
        }
        if (message.targetDenom !== "") {
            writer.uint32(26).string(message.targetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.sourceDenom = reader.string();
                    break;
                case 3:
                    message.targetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePair };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = String(object.sourceDenom);
        }
        else {
            message.sourceDenom = "";
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = String(object.targetDenom);
        }
        else {
            message.targetDenom = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.sourceDenom !== undefined &&
            (obj.sourceDenom = message.sourceDenom);
        message.targetDenom !== undefined &&
            (obj.targetDenom = message.targetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePair };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = object.sourceDenom;
        }
        else {
            message.sourceDenom = "";
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = object.targetDenom;
        }
        else {
            message.targetDenom = "";
        }
        return message;
    },
};
const baseMsgCreatePairResponse = {};
export const MsgCreatePairResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePairResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePairResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePairResponse };
        return message;
    },
};
const baseMsgSellOrder = {
    creator: "",
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
};
export const MsgSellOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amountDenom !== "") {
            writer.uint32(18).string(message.amountDenom);
        }
        if (message.amount !== 0) {
            writer.uint32(24).int32(message.amount);
        }
        if (message.priceDenom !== "") {
            writer.uint32(34).string(message.priceDenom);
        }
        if (message.price !== 0) {
            writer.uint32(40).int32(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amountDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.int32();
                    break;
                case 4:
                    message.priceDenom = reader.string();
                    break;
                case 5:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSellOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amountDenom !== undefined &&
            (obj.amountDenom = message.amountDenom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSellOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        return message;
    },
};
const baseMsgSellOrderResponse = {};
export const MsgSellOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSellOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgSellOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSellOrderResponse };
        return message;
    },
};
const baseMsgBuyOrder = {
    creator: "",
    amountDenom: "",
    amount: 0,
    priceDenom: "",
    price: 0,
};
export const MsgBuyOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amountDenom !== "") {
            writer.uint32(18).string(message.amountDenom);
        }
        if (message.amount !== 0) {
            writer.uint32(24).int32(message.amount);
        }
        if (message.priceDenom !== "") {
            writer.uint32(34).string(message.priceDenom);
        }
        if (message.price !== 0) {
            writer.uint32(40).int32(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amountDenom = reader.string();
                    break;
                case 3:
                    message.amount = reader.int32();
                    break;
                case 4:
                    message.priceDenom = reader.string();
                    break;
                case 5:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBuyOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = Number(object.price);
        }
        else {
            message.price = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amountDenom !== undefined &&
            (obj.amountDenom = message.amountDenom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuyOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = 0;
        }
        return message;
    },
};
const baseMsgBuyOrderResponse = {};
export const MsgBuyOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyOrderResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgBuyOrderResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBuyOrderResponse };
        return message;
    },
};
const baseMsgCancelBuyOrder = {
    creator: "",
    amountDenom: "",
    priceDenom: "",
    orderID: 0,
};
export const MsgCancelBuyOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amountDenom !== "") {
            writer.uint32(18).string(message.amountDenom);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.orderID !== 0) {
            writer.uint32(32).int32(message.orderID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCancelBuyOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amountDenom = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.orderID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCancelBuyOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = "";
        }
        if (object.orderID !== undefined && object.orderID !== null) {
            message.orderID = Number(object.orderID);
        }
        else {
            message.orderID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amountDenom !== undefined &&
            (obj.amountDenom = message.amountDenom);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.orderID !== undefined && (obj.orderID = message.orderID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCancelBuyOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = "";
        }
        if (object.orderID !== undefined && object.orderID !== null) {
            message.orderID = object.orderID;
        }
        else {
            message.orderID = 0;
        }
        return message;
    },
};
const baseMsgCancelBuyOrderResponse = {};
export const MsgCancelBuyOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelBuyOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgCancelBuyOrderResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCancelBuyOrderResponse,
        };
        return message;
    },
};
const baseMsgCancelSellOrder = {
    creator: "",
    amountDenom: "",
    priceDenom: "",
    orderID: 0,
};
export const MsgCancelSellOrder = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amountDenom !== "") {
            writer.uint32(18).string(message.amountDenom);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.orderID !== 0) {
            writer.uint32(32).int32(message.orderID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCancelSellOrder };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amountDenom = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
                    message.orderID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCancelSellOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = String(object.amountDenom);
        }
        else {
            message.amountDenom = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = String(object.priceDenom);
        }
        else {
            message.priceDenom = "";
        }
        if (object.orderID !== undefined && object.orderID !== null) {
            message.orderID = Number(object.orderID);
        }
        else {
            message.orderID = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amountDenom !== undefined &&
            (obj.amountDenom = message.amountDenom);
        message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
        message.orderID !== undefined && (obj.orderID = message.orderID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCancelSellOrder };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amountDenom !== undefined && object.amountDenom !== null) {
            message.amountDenom = object.amountDenom;
        }
        else {
            message.amountDenom = "";
        }
        if (object.priceDenom !== undefined && object.priceDenom !== null) {
            message.priceDenom = object.priceDenom;
        }
        else {
            message.priceDenom = "";
        }
        if (object.orderID !== undefined && object.orderID !== null) {
            message.orderID = object.orderID;
        }
        else {
            message.orderID = 0;
        }
        return message;
    },
};
const baseMsgCancelSellOrderResponse = {};
export const MsgCancelSellOrderResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelSellOrderResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgCancelSellOrderResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCancelSellOrderResponse,
        };
        return message;
    },
};
const baseMsgEnergizeToken = { creator: "", amount: 0 };
export const MsgEnergizeToken = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== 0) {
            writer.uint32(16).int32(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEnergizeToken };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgEnergizeToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgEnergizeToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        return message;
    },
};
const baseMsgEnergizeTokenResponse = {};
export const MsgEnergizeTokenResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgEnergizeTokenResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgEnergizeTokenResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgEnergizeTokenResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RegisterSmartMeter(request) {
        const data = MsgRegisterSmartMeter.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "RegisterSmartMeter", data);
        return promise.then((data) => MsgRegisterSmartMeterResponse.decode(new Reader(data)));
    }
    RegisterEnergyStore(request) {
        const data = MsgRegisterEnergyStore.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "RegisterEnergyStore", data);
        return promise.then((data) => MsgRegisterEnergyStoreResponse.decode(new Reader(data)));
    }
    TokenizeEnergy(request) {
        const data = MsgTokenizeEnergy.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "TokenizeEnergy", data);
        return promise.then((data) => MsgTokenizeEnergyResponse.decode(new Reader(data)));
    }
    CreatePair(request) {
        const data = MsgCreatePair.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "CreatePair", data);
        return promise.then((data) => MsgCreatePairResponse.decode(new Reader(data)));
    }
    SellOrder(request) {
        const data = MsgSellOrder.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "SellOrder", data);
        return promise.then((data) => MsgSellOrderResponse.decode(new Reader(data)));
    }
    BuyOrder(request) {
        const data = MsgBuyOrder.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "BuyOrder", data);
        return promise.then((data) => MsgBuyOrderResponse.decode(new Reader(data)));
    }
    CancelBuyOrder(request) {
        const data = MsgCancelBuyOrder.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "CancelBuyOrder", data);
        return promise.then((data) => MsgCancelBuyOrderResponse.decode(new Reader(data)));
    }
    CancelSellOrder(request) {
        const data = MsgCancelSellOrder.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "CancelSellOrder", data);
        return promise.then((data) => MsgCancelSellOrderResponse.decode(new Reader(data)));
    }
    EnergizeToken(request) {
        const data = MsgEnergizeToken.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Msg", "EnergizeToken", data);
        return promise.then((data) => MsgEnergizeTokenResponse.decode(new Reader(data)));
    }
}
