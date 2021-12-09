/* eslint-disable */
import { SmartMeter } from "../energija/smart_meter";
import { EnergyStore } from "../energija/energy_store";
import { BuyOrderBook } from "../energija/buy_order_book";
import { SellOrderBook } from "../energija/sell_order_book";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "kiprasdak.energija.energija";

/** GenesisState defines the energija module's genesis state. */
export interface GenesisState {
  smartMeterList: SmartMeter[];
  energyStoreList: EnergyStore[];
  buyOrderBookList: BuyOrderBook[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  sellOrderBookList: SellOrderBook[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.smartMeterList) {
      SmartMeter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.energyStoreList) {
      EnergyStore.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.buyOrderBookList) {
      BuyOrderBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sellOrderBookList) {
      SellOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.smartMeterList = [];
    message.energyStoreList = [];
    message.buyOrderBookList = [];
    message.sellOrderBookList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smartMeterList.push(
            SmartMeter.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.energyStoreList.push(
            EnergyStore.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.buyOrderBookList.push(
            BuyOrderBook.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.sellOrderBookList.push(
            SellOrderBook.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.smartMeterList = [];
    message.energyStoreList = [];
    message.buyOrderBookList = [];
    message.sellOrderBookList = [];
    if (object.smartMeterList !== undefined && object.smartMeterList !== null) {
      for (const e of object.smartMeterList) {
        message.smartMeterList.push(SmartMeter.fromJSON(e));
      }
    }
    if (
      object.energyStoreList !== undefined &&
      object.energyStoreList !== null
    ) {
      for (const e of object.energyStoreList) {
        message.energyStoreList.push(EnergyStore.fromJSON(e));
      }
    }
    if (
      object.buyOrderBookList !== undefined &&
      object.buyOrderBookList !== null
    ) {
      for (const e of object.buyOrderBookList) {
        message.buyOrderBookList.push(BuyOrderBook.fromJSON(e));
      }
    }
    if (
      object.sellOrderBookList !== undefined &&
      object.sellOrderBookList !== null
    ) {
      for (const e of object.sellOrderBookList) {
        message.sellOrderBookList.push(SellOrderBook.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.smartMeterList) {
      obj.smartMeterList = message.smartMeterList.map((e) =>
        e ? SmartMeter.toJSON(e) : undefined
      );
    } else {
      obj.smartMeterList = [];
    }
    if (message.energyStoreList) {
      obj.energyStoreList = message.energyStoreList.map((e) =>
        e ? EnergyStore.toJSON(e) : undefined
      );
    } else {
      obj.energyStoreList = [];
    }
    if (message.buyOrderBookList) {
      obj.buyOrderBookList = message.buyOrderBookList.map((e) =>
        e ? BuyOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.buyOrderBookList = [];
    }
    if (message.sellOrderBookList) {
      obj.sellOrderBookList = message.sellOrderBookList.map((e) =>
        e ? SellOrderBook.toJSON(e) : undefined
      );
    } else {
      obj.sellOrderBookList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.smartMeterList = [];
    message.energyStoreList = [];
    message.buyOrderBookList = [];
    message.sellOrderBookList = [];
    if (object.smartMeterList !== undefined && object.smartMeterList !== null) {
      for (const e of object.smartMeterList) {
        message.smartMeterList.push(SmartMeter.fromPartial(e));
      }
    }
    if (
      object.energyStoreList !== undefined &&
      object.energyStoreList !== null
    ) {
      for (const e of object.energyStoreList) {
        message.energyStoreList.push(EnergyStore.fromPartial(e));
      }
    }
    if (
      object.buyOrderBookList !== undefined &&
      object.buyOrderBookList !== null
    ) {
      for (const e of object.buyOrderBookList) {
        message.buyOrderBookList.push(BuyOrderBook.fromPartial(e));
      }
    }
    if (
      object.sellOrderBookList !== undefined &&
      object.sellOrderBookList !== null
    ) {
      for (const e of object.sellOrderBookList) {
        message.sellOrderBookList.push(SellOrderBook.fromPartial(e));
      }
    }
    return message;
  },
};

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
