/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { SmartMeter } from "../energija/smart_meter";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { EnergyStore } from "../energija/energy_store";

export const protobufPackage = "kiprasdak.energija.energija";

export interface QueryGetSmartMeterRequest {
  index: string;
}

export interface QueryGetSmartMeterResponse {
  smartMeter: SmartMeter | undefined;
}

export interface QueryAllSmartMeterRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllSmartMeterResponse {
  smartMeter: SmartMeter[];
  pagination: PageResponse | undefined;
}

export interface QueryGetEnergyStoreRequest {
  index: string;
}

export interface QueryGetEnergyStoreResponse {
  energyStore: EnergyStore | undefined;
}

export interface QueryAllEnergyStoreRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllEnergyStoreResponse {
  energyStore: EnergyStore[];
  pagination: PageResponse | undefined;
}

const baseQueryGetSmartMeterRequest: object = { index: "" };

export const QueryGetSmartMeterRequest = {
  encode(
    message: QueryGetSmartMeterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSmartMeterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSmartMeterRequest,
    } as QueryGetSmartMeterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSmartMeterRequest {
    const message = {
      ...baseQueryGetSmartMeterRequest,
    } as QueryGetSmartMeterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetSmartMeterRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSmartMeterRequest>
  ): QueryGetSmartMeterRequest {
    const message = {
      ...baseQueryGetSmartMeterRequest,
    } as QueryGetSmartMeterRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetSmartMeterResponse: object = {};

export const QueryGetSmartMeterResponse = {
  encode(
    message: QueryGetSmartMeterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.smartMeter !== undefined) {
      SmartMeter.encode(message.smartMeter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSmartMeterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSmartMeterResponse,
    } as QueryGetSmartMeterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smartMeter = SmartMeter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSmartMeterResponse {
    const message = {
      ...baseQueryGetSmartMeterResponse,
    } as QueryGetSmartMeterResponse;
    if (object.smartMeter !== undefined && object.smartMeter !== null) {
      message.smartMeter = SmartMeter.fromJSON(object.smartMeter);
    } else {
      message.smartMeter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSmartMeterResponse): unknown {
    const obj: any = {};
    message.smartMeter !== undefined &&
      (obj.smartMeter = message.smartMeter
        ? SmartMeter.toJSON(message.smartMeter)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSmartMeterResponse>
  ): QueryGetSmartMeterResponse {
    const message = {
      ...baseQueryGetSmartMeterResponse,
    } as QueryGetSmartMeterResponse;
    if (object.smartMeter !== undefined && object.smartMeter !== null) {
      message.smartMeter = SmartMeter.fromPartial(object.smartMeter);
    } else {
      message.smartMeter = undefined;
    }
    return message;
  },
};

const baseQueryAllSmartMeterRequest: object = {};

export const QueryAllSmartMeterRequest = {
  encode(
    message: QueryAllSmartMeterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSmartMeterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSmartMeterRequest,
    } as QueryAllSmartMeterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSmartMeterRequest {
    const message = {
      ...baseQueryAllSmartMeterRequest,
    } as QueryAllSmartMeterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSmartMeterRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSmartMeterRequest>
  ): QueryAllSmartMeterRequest {
    const message = {
      ...baseQueryAllSmartMeterRequest,
    } as QueryAllSmartMeterRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSmartMeterResponse: object = {};

export const QueryAllSmartMeterResponse = {
  encode(
    message: QueryAllSmartMeterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.smartMeter) {
      SmartMeter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSmartMeterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSmartMeterResponse,
    } as QueryAllSmartMeterResponse;
    message.smartMeter = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smartMeter.push(SmartMeter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSmartMeterResponse {
    const message = {
      ...baseQueryAllSmartMeterResponse,
    } as QueryAllSmartMeterResponse;
    message.smartMeter = [];
    if (object.smartMeter !== undefined && object.smartMeter !== null) {
      for (const e of object.smartMeter) {
        message.smartMeter.push(SmartMeter.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSmartMeterResponse): unknown {
    const obj: any = {};
    if (message.smartMeter) {
      obj.smartMeter = message.smartMeter.map((e) =>
        e ? SmartMeter.toJSON(e) : undefined
      );
    } else {
      obj.smartMeter = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSmartMeterResponse>
  ): QueryAllSmartMeterResponse {
    const message = {
      ...baseQueryAllSmartMeterResponse,
    } as QueryAllSmartMeterResponse;
    message.smartMeter = [];
    if (object.smartMeter !== undefined && object.smartMeter !== null) {
      for (const e of object.smartMeter) {
        message.smartMeter.push(SmartMeter.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetEnergyStoreRequest: object = { index: "" };

export const QueryGetEnergyStoreRequest = {
  encode(
    message: QueryGetEnergyStoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetEnergyStoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEnergyStoreRequest,
    } as QueryGetEnergyStoreRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEnergyStoreRequest {
    const message = {
      ...baseQueryGetEnergyStoreRequest,
    } as QueryGetEnergyStoreRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetEnergyStoreRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEnergyStoreRequest>
  ): QueryGetEnergyStoreRequest {
    const message = {
      ...baseQueryGetEnergyStoreRequest,
    } as QueryGetEnergyStoreRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetEnergyStoreResponse: object = {};

export const QueryGetEnergyStoreResponse = {
  encode(
    message: QueryGetEnergyStoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.energyStore !== undefined) {
      EnergyStore.encode(
        message.energyStore,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetEnergyStoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetEnergyStoreResponse,
    } as QueryGetEnergyStoreResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.energyStore = EnergyStore.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetEnergyStoreResponse {
    const message = {
      ...baseQueryGetEnergyStoreResponse,
    } as QueryGetEnergyStoreResponse;
    if (object.energyStore !== undefined && object.energyStore !== null) {
      message.energyStore = EnergyStore.fromJSON(object.energyStore);
    } else {
      message.energyStore = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetEnergyStoreResponse): unknown {
    const obj: any = {};
    message.energyStore !== undefined &&
      (obj.energyStore = message.energyStore
        ? EnergyStore.toJSON(message.energyStore)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetEnergyStoreResponse>
  ): QueryGetEnergyStoreResponse {
    const message = {
      ...baseQueryGetEnergyStoreResponse,
    } as QueryGetEnergyStoreResponse;
    if (object.energyStore !== undefined && object.energyStore !== null) {
      message.energyStore = EnergyStore.fromPartial(object.energyStore);
    } else {
      message.energyStore = undefined;
    }
    return message;
  },
};

const baseQueryAllEnergyStoreRequest: object = {};

export const QueryAllEnergyStoreRequest = {
  encode(
    message: QueryAllEnergyStoreRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllEnergyStoreRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllEnergyStoreRequest,
    } as QueryAllEnergyStoreRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyStoreRequest {
    const message = {
      ...baseQueryAllEnergyStoreRequest,
    } as QueryAllEnergyStoreRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEnergyStoreRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllEnergyStoreRequest>
  ): QueryAllEnergyStoreRequest {
    const message = {
      ...baseQueryAllEnergyStoreRequest,
    } as QueryAllEnergyStoreRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllEnergyStoreResponse: object = {};

export const QueryAllEnergyStoreResponse = {
  encode(
    message: QueryAllEnergyStoreResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.energyStore) {
      EnergyStore.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllEnergyStoreResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllEnergyStoreResponse,
    } as QueryAllEnergyStoreResponse;
    message.energyStore = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.energyStore.push(EnergyStore.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllEnergyStoreResponse {
    const message = {
      ...baseQueryAllEnergyStoreResponse,
    } as QueryAllEnergyStoreResponse;
    message.energyStore = [];
    if (object.energyStore !== undefined && object.energyStore !== null) {
      for (const e of object.energyStore) {
        message.energyStore.push(EnergyStore.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllEnergyStoreResponse): unknown {
    const obj: any = {};
    if (message.energyStore) {
      obj.energyStore = message.energyStore.map((e) =>
        e ? EnergyStore.toJSON(e) : undefined
      );
    } else {
      obj.energyStore = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllEnergyStoreResponse>
  ): QueryAllEnergyStoreResponse {
    const message = {
      ...baseQueryAllEnergyStoreResponse,
    } as QueryAllEnergyStoreResponse;
    message.energyStore = [];
    if (object.energyStore !== undefined && object.energyStore !== null) {
      for (const e of object.energyStore) {
        message.energyStore.push(EnergyStore.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a smartMeter by index. */
  SmartMeter(
    request: QueryGetSmartMeterRequest
  ): Promise<QueryGetSmartMeterResponse>;
  /** Queries a list of smartMeter items. */
  SmartMeterAll(
    request: QueryAllSmartMeterRequest
  ): Promise<QueryAllSmartMeterResponse>;
  /** Queries a energyStore by index. */
  EnergyStore(
    request: QueryGetEnergyStoreRequest
  ): Promise<QueryGetEnergyStoreResponse>;
  /** Queries a list of energyStore items. */
  EnergyStoreAll(
    request: QueryAllEnergyStoreRequest
  ): Promise<QueryAllEnergyStoreResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SmartMeter(
    request: QueryGetSmartMeterRequest
  ): Promise<QueryGetSmartMeterResponse> {
    const data = QueryGetSmartMeterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Query",
      "SmartMeter",
      data
    );
    return promise.then((data) =>
      QueryGetSmartMeterResponse.decode(new Reader(data))
    );
  }

  SmartMeterAll(
    request: QueryAllSmartMeterRequest
  ): Promise<QueryAllSmartMeterResponse> {
    const data = QueryAllSmartMeterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Query",
      "SmartMeterAll",
      data
    );
    return promise.then((data) =>
      QueryAllSmartMeterResponse.decode(new Reader(data))
    );
  }

  EnergyStore(
    request: QueryGetEnergyStoreRequest
  ): Promise<QueryGetEnergyStoreResponse> {
    const data = QueryGetEnergyStoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Query",
      "EnergyStore",
      data
    );
    return promise.then((data) =>
      QueryGetEnergyStoreResponse.decode(new Reader(data))
    );
  }

  EnergyStoreAll(
    request: QueryAllEnergyStoreRequest
  ): Promise<QueryAllEnergyStoreResponse> {
    const data = QueryAllEnergyStoreRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kiprasdak.energija.energija.Query",
      "EnergyStoreAll",
      data
    );
    return promise.then((data) =>
      QueryAllEnergyStoreResponse.decode(new Reader(data))
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
