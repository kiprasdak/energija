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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RegisterSmartMeter(
    request: MsgRegisterSmartMeter
  ): Promise<MsgRegisterSmartMeterResponse>;
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
