/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "kiprasdak.energija.energija";

export interface MsgRegisterSmartMeter {
  creator: string;
  production: number;
  consumption: number;
  description: string;
}

export interface MsgRegisterSmartMeterResponse {}

export interface MsgRegisterEnergyStore {
  creator: string;
  description: string;
}

export interface MsgRegisterEnergyStoreResponse {}

export interface MsgTokenizeEnergy {
  creator: string;
  amount: number;
}

export interface MsgTokenizeEnergyResponse {}

export interface MsgCreatePair {
  creator: string;
  sourceDenom: string;
  targetDenom: string;
}

export interface MsgCreatePairResponse {}

export interface MsgSellOrder {
  creator: string;
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

export interface MsgSellOrderResponse {}

export interface MsgBuyOrder {
  creator: string;
  amountDenom: string;
  amount: number;
  priceDenom: string;
  price: number;
}

export interface MsgBuyOrderResponse {}

export interface MsgCancelBuyOrder {
  creator: string;
  amountDenom: string;
  priceDenom: string;
  orderID: number;
}

export interface MsgCancelBuyOrderResponse {}

export interface MsgCancelSellOrder {
  creator: string;
  amountDenom: string;
  priceDenom: string;
  orderID: number;
}

export interface MsgCancelSellOrderResponse {}

const baseMsgRegisterSmartMeter: object = {
  creator: "",
  production: 0,
  consumption: 0,
  description: "",
};

export const MsgRegisterSmartMeter = {
  encode(
    message: MsgRegisterSmartMeter,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterSmartMeter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterSmartMeter } as MsgRegisterSmartMeter;
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

  fromJSON(object: any): MsgRegisterSmartMeter {
    const message = { ...baseMsgRegisterSmartMeter } as MsgRegisterSmartMeter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.production !== undefined && object.production !== null) {
      message.production = Number(object.production);
    } else {
      message.production = 0;
    }
    if (object.consumption !== undefined && object.consumption !== null) {
      message.consumption = Number(object.consumption);
    } else {
      message.consumption = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterSmartMeter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.production !== undefined && (obj.production = message.production);
    message.consumption !== undefined &&
      (obj.consumption = message.consumption);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterSmartMeter>
  ): MsgRegisterSmartMeter {
    const message = { ...baseMsgRegisterSmartMeter } as MsgRegisterSmartMeter;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.production !== undefined && object.production !== null) {
      message.production = object.production;
    } else {
      message.production = 0;
    }
    if (object.consumption !== undefined && object.consumption !== null) {
      message.consumption = object.consumption;
    } else {
      message.consumption = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgRegisterSmartMeterResponse: object = {};

export const MsgRegisterSmartMeterResponse = {
  encode(
    _: MsgRegisterSmartMeterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterSmartMeterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterSmartMeterResponse,
    } as MsgRegisterSmartMeterResponse;
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

  fromJSON(_: any): MsgRegisterSmartMeterResponse {
    const message = {
      ...baseMsgRegisterSmartMeterResponse,
    } as MsgRegisterSmartMeterResponse;
    return message;
  },

  toJSON(_: MsgRegisterSmartMeterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterSmartMeterResponse>
  ): MsgRegisterSmartMeterResponse {
    const message = {
      ...baseMsgRegisterSmartMeterResponse,
    } as MsgRegisterSmartMeterResponse;
    return message;
  },
};

const baseMsgRegisterEnergyStore: object = { creator: "", description: "" };

export const MsgRegisterEnergyStore = {
  encode(
    message: MsgRegisterEnergyStore,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterEnergyStore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterEnergyStore } as MsgRegisterEnergyStore;
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

  fromJSON(object: any): MsgRegisterEnergyStore {
    const message = { ...baseMsgRegisterEnergyStore } as MsgRegisterEnergyStore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterEnergyStore): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRegisterEnergyStore>
  ): MsgRegisterEnergyStore {
    const message = { ...baseMsgRegisterEnergyStore } as MsgRegisterEnergyStore;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgRegisterEnergyStoreResponse: object = {};

export const MsgRegisterEnergyStoreResponse = {
  encode(
    _: MsgRegisterEnergyStoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterEnergyStoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRegisterEnergyStoreResponse,
    } as MsgRegisterEnergyStoreResponse;
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

  fromJSON(_: any): MsgRegisterEnergyStoreResponse {
    const message = {
      ...baseMsgRegisterEnergyStoreResponse,
    } as MsgRegisterEnergyStoreResponse;
    return message;
  },

  toJSON(_: MsgRegisterEnergyStoreResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRegisterEnergyStoreResponse>
  ): MsgRegisterEnergyStoreResponse {
    const message = {
      ...baseMsgRegisterEnergyStoreResponse,
    } as MsgRegisterEnergyStoreResponse;
    return message;
  },
};

const baseMsgTokenizeEnergy: object = { creator: "", amount: 0 };

export const MsgTokenizeEnergy = {
  encode(message: MsgTokenizeEnergy, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTokenizeEnergy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTokenizeEnergy } as MsgTokenizeEnergy;
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

  fromJSON(object: any): MsgTokenizeEnergy {
    const message = { ...baseMsgTokenizeEnergy } as MsgTokenizeEnergy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgTokenizeEnergy): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTokenizeEnergy>): MsgTokenizeEnergy {
    const message = { ...baseMsgTokenizeEnergy } as MsgTokenizeEnergy;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgTokenizeEnergyResponse: object = {};

export const MsgTokenizeEnergyResponse = {
  encode(
    _: MsgTokenizeEnergyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgTokenizeEnergyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgTokenizeEnergyResponse,
    } as MsgTokenizeEnergyResponse;
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

  fromJSON(_: any): MsgTokenizeEnergyResponse {
    const message = {
      ...baseMsgTokenizeEnergyResponse,
    } as MsgTokenizeEnergyResponse;
    return message;
  },

  toJSON(_: MsgTokenizeEnergyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgTokenizeEnergyResponse>
  ): MsgTokenizeEnergyResponse {
    const message = {
      ...baseMsgTokenizeEnergyResponse,
    } as MsgTokenizeEnergyResponse;
    return message;
  },
};

const baseMsgCreatePair: object = {
  creator: "",
  sourceDenom: "",
  targetDenom: "",
};

export const MsgCreatePair = {
  encode(message: MsgCreatePair, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePair {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePair } as MsgCreatePair;
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

  fromJSON(object: any): MsgCreatePair {
    const message = { ...baseMsgCreatePair } as MsgCreatePair;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = String(object.sourceDenom);
    } else {
      message.sourceDenom = "";
    }
    if (object.targetDenom !== undefined && object.targetDenom !== null) {
      message.targetDenom = String(object.targetDenom);
    } else {
      message.targetDenom = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePair): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sourceDenom !== undefined &&
      (obj.sourceDenom = message.sourceDenom);
    message.targetDenom !== undefined &&
      (obj.targetDenom = message.targetDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePair>): MsgCreatePair {
    const message = { ...baseMsgCreatePair } as MsgCreatePair;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
      message.sourceDenom = object.sourceDenom;
    } else {
      message.sourceDenom = "";
    }
    if (object.targetDenom !== undefined && object.targetDenom !== null) {
      message.targetDenom = object.targetDenom;
    } else {
      message.targetDenom = "";
    }
    return message;
  },
};

const baseMsgCreatePairResponse: object = {};

export const MsgCreatePairResponse = {
  encode(_: MsgCreatePairResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePairResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePairResponse } as MsgCreatePairResponse;
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

  fromJSON(_: any): MsgCreatePairResponse {
    const message = { ...baseMsgCreatePairResponse } as MsgCreatePairResponse;
    return message;
  },

  toJSON(_: MsgCreatePairResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePairResponse>): MsgCreatePairResponse {
    const message = { ...baseMsgCreatePairResponse } as MsgCreatePairResponse;
    return message;
  },
};

const baseMsgSellOrder: object = {
  creator: "",
  amountDenom: "",
  amount: 0,
  priceDenom: "",
  price: 0,
};

export const MsgSellOrder = {
  encode(message: MsgSellOrder, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgSellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellOrder } as MsgSellOrder;
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

  fromJSON(object: any): MsgSellOrder {
    const message = { ...baseMsgSellOrder } as MsgSellOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom);
    } else {
      message.amountDenom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom);
    } else {
      message.priceDenom = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },

  toJSON(message: MsgSellOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amountDenom !== undefined &&
      (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellOrder>): MsgSellOrder {
    const message = { ...baseMsgSellOrder } as MsgSellOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom;
    } else {
      message.amountDenom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    } else {
      message.priceDenom = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    return message;
  },
};

const baseMsgSellOrderResponse: object = {};

export const MsgSellOrderResponse = {
  encode(_: MsgSellOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellOrderResponse } as MsgSellOrderResponse;
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

  fromJSON(_: any): MsgSellOrderResponse {
    const message = { ...baseMsgSellOrderResponse } as MsgSellOrderResponse;
    return message;
  },

  toJSON(_: MsgSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSellOrderResponse>): MsgSellOrderResponse {
    const message = { ...baseMsgSellOrderResponse } as MsgSellOrderResponse;
    return message;
  },
};

const baseMsgBuyOrder: object = {
  creator: "",
  amountDenom: "",
  amount: 0,
  priceDenom: "",
  price: 0,
};

export const MsgBuyOrder = {
  encode(message: MsgBuyOrder, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgBuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyOrder } as MsgBuyOrder;
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

  fromJSON(object: any): MsgBuyOrder {
    const message = { ...baseMsgBuyOrder } as MsgBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom);
    } else {
      message.amountDenom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom);
    } else {
      message.priceDenom = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = Number(object.price);
    } else {
      message.price = 0;
    }
    return message;
  },

  toJSON(message: MsgBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amountDenom !== undefined &&
      (obj.amountDenom = message.amountDenom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyOrder>): MsgBuyOrder {
    const message = { ...baseMsgBuyOrder } as MsgBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom;
    } else {
      message.amountDenom = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    } else {
      message.priceDenom = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = 0;
    }
    return message;
  },
};

const baseMsgBuyOrderResponse: object = {};

export const MsgBuyOrderResponse = {
  encode(_: MsgBuyOrderResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyOrderResponse } as MsgBuyOrderResponse;
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

  fromJSON(_: any): MsgBuyOrderResponse {
    const message = { ...baseMsgBuyOrderResponse } as MsgBuyOrderResponse;
    return message;
  },

  toJSON(_: MsgBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyOrderResponse>): MsgBuyOrderResponse {
    const message = { ...baseMsgBuyOrderResponse } as MsgBuyOrderResponse;
    return message;
  },
};

const baseMsgCancelBuyOrder: object = {
  creator: "",
  amountDenom: "",
  priceDenom: "",
  orderID: 0,
};

export const MsgCancelBuyOrder = {
  encode(message: MsgCancelBuyOrder, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCancelBuyOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelBuyOrder } as MsgCancelBuyOrder;
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

  fromJSON(object: any): MsgCancelBuyOrder {
    const message = { ...baseMsgCancelBuyOrder } as MsgCancelBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom);
    } else {
      message.amountDenom = "";
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom);
    } else {
      message.priceDenom = "";
    }
    if (object.orderID !== undefined && object.orderID !== null) {
      message.orderID = Number(object.orderID);
    } else {
      message.orderID = 0;
    }
    return message;
  },

  toJSON(message: MsgCancelBuyOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amountDenom !== undefined &&
      (obj.amountDenom = message.amountDenom);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.orderID !== undefined && (obj.orderID = message.orderID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelBuyOrder>): MsgCancelBuyOrder {
    const message = { ...baseMsgCancelBuyOrder } as MsgCancelBuyOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom;
    } else {
      message.amountDenom = "";
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    } else {
      message.priceDenom = "";
    }
    if (object.orderID !== undefined && object.orderID !== null) {
      message.orderID = object.orderID;
    } else {
      message.orderID = 0;
    }
    return message;
  },
};

const baseMsgCancelBuyOrderResponse: object = {};

export const MsgCancelBuyOrderResponse = {
  encode(
    _: MsgCancelBuyOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelBuyOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelBuyOrderResponse,
    } as MsgCancelBuyOrderResponse;
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

  fromJSON(_: any): MsgCancelBuyOrderResponse {
    const message = {
      ...baseMsgCancelBuyOrderResponse,
    } as MsgCancelBuyOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelBuyOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelBuyOrderResponse>
  ): MsgCancelBuyOrderResponse {
    const message = {
      ...baseMsgCancelBuyOrderResponse,
    } as MsgCancelBuyOrderResponse;
    return message;
  },
};

const baseMsgCancelSellOrder: object = {
  creator: "",
  amountDenom: "",
  priceDenom: "",
  orderID: 0,
};

export const MsgCancelSellOrder = {
  encode(
    message: MsgCancelSellOrder,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCancelSellOrder {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelSellOrder } as MsgCancelSellOrder;
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

  fromJSON(object: any): MsgCancelSellOrder {
    const message = { ...baseMsgCancelSellOrder } as MsgCancelSellOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = String(object.amountDenom);
    } else {
      message.amountDenom = "";
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = String(object.priceDenom);
    } else {
      message.priceDenom = "";
    }
    if (object.orderID !== undefined && object.orderID !== null) {
      message.orderID = Number(object.orderID);
    } else {
      message.orderID = 0;
    }
    return message;
  },

  toJSON(message: MsgCancelSellOrder): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amountDenom !== undefined &&
      (obj.amountDenom = message.amountDenom);
    message.priceDenom !== undefined && (obj.priceDenom = message.priceDenom);
    message.orderID !== undefined && (obj.orderID = message.orderID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelSellOrder>): MsgCancelSellOrder {
    const message = { ...baseMsgCancelSellOrder } as MsgCancelSellOrder;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.amountDenom !== undefined && object.amountDenom !== null) {
      message.amountDenom = object.amountDenom;
    } else {
      message.amountDenom = "";
    }
    if (object.priceDenom !== undefined && object.priceDenom !== null) {
      message.priceDenom = object.priceDenom;
    } else {
      message.priceDenom = "";
    }
    if (object.orderID !== undefined && object.orderID !== null) {
      message.orderID = object.orderID;
    } else {
      message.orderID = 0;
    }
    return message;
  },
};

const baseMsgCancelSellOrderResponse: object = {};

export const MsgCancelSellOrderResponse = {
  encode(
    _: MsgCancelSellOrderResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelSellOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelSellOrderResponse,
    } as MsgCancelSellOrderResponse;
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

  fromJSON(_: any): MsgCancelSellOrderResponse {
    const message = {
      ...baseMsgCancelSellOrderResponse,
    } as MsgCancelSellOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelSellOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelSellOrderResponse>
  ): MsgCancelSellOrderResponse {
    const message = {
      ...baseMsgCancelSellOrderResponse,
    } as MsgCancelSellOrderResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RegisterSmartMeter(
    request: MsgRegisterSmartMeter
  ): Promise<MsgRegisterSmartMeterResponse>;
  RegisterEnergyStore(
    request: MsgRegisterEnergyStore
  ): Promise<MsgRegisterEnergyStoreResponse>;
  TokenizeEnergy(
    request: MsgTokenizeEnergy
  ): Promise<MsgTokenizeEnergyResponse>;
  CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
  SellOrder(request: MsgSellOrder): Promise<MsgSellOrderResponse>;
  BuyOrder(request: MsgBuyOrder): Promise<MsgBuyOrderResponse>;
  CancelBuyOrder(
    request: MsgCancelBuyOrder
  ): Promise<MsgCancelBuyOrderResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelSellOrder(
    request: MsgCancelSellOrder
  ): Promise<MsgCancelSellOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RegisterSmartMeter(
    request: MsgRegisterSmartMeter
  ): Promise<MsgRegisterSmartMeterResponse> {
    const data = MsgRegisterSmartMeter.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "RegisterSmartMeter",
      data
    );
    return promise.then((data) =>
      MsgRegisterSmartMeterResponse.decode(new Reader(data))
    );
  }

  RegisterEnergyStore(
    request: MsgRegisterEnergyStore
  ): Promise<MsgRegisterEnergyStoreResponse> {
    const data = MsgRegisterEnergyStore.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "RegisterEnergyStore",
      data
    );
    return promise.then((data) =>
      MsgRegisterEnergyStoreResponse.decode(new Reader(data))
    );
  }

  TokenizeEnergy(
    request: MsgTokenizeEnergy
  ): Promise<MsgTokenizeEnergyResponse> {
    const data = MsgTokenizeEnergy.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "TokenizeEnergy",
      data
    );
    return promise.then((data) =>
      MsgTokenizeEnergyResponse.decode(new Reader(data))
    );
  }

  CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse> {
    const data = MsgCreatePair.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "CreatePair",
      data
    );
    return promise.then((data) =>
      MsgCreatePairResponse.decode(new Reader(data))
    );
  }

  SellOrder(request: MsgSellOrder): Promise<MsgSellOrderResponse> {
    const data = MsgSellOrder.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "SellOrder",
      data
    );
    return promise.then((data) =>
      MsgSellOrderResponse.decode(new Reader(data))
    );
  }

  BuyOrder(request: MsgBuyOrder): Promise<MsgBuyOrderResponse> {
    const data = MsgBuyOrder.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "BuyOrder",
      data
    );
    return promise.then((data) => MsgBuyOrderResponse.decode(new Reader(data)));
  }

  CancelBuyOrder(
    request: MsgCancelBuyOrder
  ): Promise<MsgCancelBuyOrderResponse> {
    const data = MsgCancelBuyOrder.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "CancelBuyOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelBuyOrderResponse.decode(new Reader(data))
    );
  }

  CancelSellOrder(
    request: MsgCancelSellOrder
  ): Promise<MsgCancelSellOrderResponse> {
    const data = MsgCancelSellOrder.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Msg",
      "CancelSellOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelSellOrderResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
