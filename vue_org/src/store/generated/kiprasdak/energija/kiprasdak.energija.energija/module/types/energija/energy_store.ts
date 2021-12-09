/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "kiprasdak.energija.energija";

export interface EnergyStore {
  index: string;
  stored: number;
  reserved: number;
  description: string;
}

const baseEnergyStore: object = {
  index: "",
  stored: 0,
  reserved: 0,
  description: "",
};

export const EnergyStore = {
  encode(message: EnergyStore, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.stored !== 0) {
      writer.uint32(16).int32(message.stored);
    }
    if (message.reserved !== 0) {
      writer.uint32(24).int32(message.reserved);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EnergyStore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnergyStore } as EnergyStore;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.stored = reader.int32();
          break;
        case 3:
          message.reserved = reader.int32();
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

  fromJSON(object: any): EnergyStore {
    const message = { ...baseEnergyStore } as EnergyStore;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.stored !== undefined && object.stored !== null) {
      message.stored = Number(object.stored);
    } else {
      message.stored = 0;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = Number(object.reserved);
    } else {
      message.reserved = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: EnergyStore): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.stored !== undefined && (obj.stored = message.stored);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<EnergyStore>): EnergyStore {
    const message = { ...baseEnergyStore } as EnergyStore;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.stored !== undefined && object.stored !== null) {
      message.stored = object.stored;
    } else {
      message.stored = 0;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    } else {
      message.reserved = 0;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
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
