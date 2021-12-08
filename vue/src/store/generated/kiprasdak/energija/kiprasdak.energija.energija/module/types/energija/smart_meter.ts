/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "kiprasdak.energija.energija";

export interface SmartMeter {
  index: string;
  production: number;
  consumption: number;
  description: string;
}

const baseSmartMeter: object = {
  index: "",
  production: 0,
  consumption: 0,
  description: "",
};

export const SmartMeter = {
  encode(message: SmartMeter, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
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

  decode(input: Reader | Uint8Array, length?: number): SmartMeter {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSmartMeter } as SmartMeter;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
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

  fromJSON(object: any): SmartMeter {
    const message = { ...baseSmartMeter } as SmartMeter;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
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

  toJSON(message: SmartMeter): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.production !== undefined && (obj.production = message.production);
    message.consumption !== undefined &&
      (obj.consumption = message.consumption);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<SmartMeter>): SmartMeter {
    const message = { ...baseSmartMeter } as SmartMeter;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
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
