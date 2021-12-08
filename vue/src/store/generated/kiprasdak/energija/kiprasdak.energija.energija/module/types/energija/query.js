/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { SmartMeter } from "../energija/smart_meter";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { EnergyStore } from "../energija/energy_store";
export const protobufPackage = "kiprasdak.energija.energija";
const baseQueryGetSmartMeterRequest = { index: "" };
export const QueryGetSmartMeterRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSmartMeterRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetSmartMeterRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSmartMeterRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSmartMeterResponse = {};
export const QueryGetSmartMeterResponse = {
    encode(message, writer = Writer.create()) {
        if (message.smartMeter !== undefined) {
            SmartMeter.encode(message.smartMeter, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSmartMeterResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetSmartMeterResponse,
        };
        if (object.smartMeter !== undefined && object.smartMeter !== null) {
            message.smartMeter = SmartMeter.fromJSON(object.smartMeter);
        }
        else {
            message.smartMeter = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.smartMeter !== undefined &&
            (obj.smartMeter = message.smartMeter
                ? SmartMeter.toJSON(message.smartMeter)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSmartMeterResponse,
        };
        if (object.smartMeter !== undefined && object.smartMeter !== null) {
            message.smartMeter = SmartMeter.fromPartial(object.smartMeter);
        }
        else {
            message.smartMeter = undefined;
        }
        return message;
    },
};
const baseQueryAllSmartMeterRequest = {};
export const QueryAllSmartMeterRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSmartMeterRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllSmartMeterRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSmartMeterRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSmartMeterResponse = {};
export const QueryAllSmartMeterResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.smartMeter) {
            SmartMeter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSmartMeterResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllSmartMeterResponse,
        };
        message.smartMeter = [];
        if (object.smartMeter !== undefined && object.smartMeter !== null) {
            for (const e of object.smartMeter) {
                message.smartMeter.push(SmartMeter.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.smartMeter) {
            obj.smartMeter = message.smartMeter.map((e) => e ? SmartMeter.toJSON(e) : undefined);
        }
        else {
            obj.smartMeter = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSmartMeterResponse,
        };
        message.smartMeter = [];
        if (object.smartMeter !== undefined && object.smartMeter !== null) {
            for (const e of object.smartMeter) {
                message.smartMeter.push(SmartMeter.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetEnergyStoreRequest = { index: "" };
export const QueryGetEnergyStoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetEnergyStoreRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetEnergyStoreRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetEnergyStoreRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetEnergyStoreResponse = {};
export const QueryGetEnergyStoreResponse = {
    encode(message, writer = Writer.create()) {
        if (message.energyStore !== undefined) {
            EnergyStore.encode(message.energyStore, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetEnergyStoreResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetEnergyStoreResponse,
        };
        if (object.energyStore !== undefined && object.energyStore !== null) {
            message.energyStore = EnergyStore.fromJSON(object.energyStore);
        }
        else {
            message.energyStore = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.energyStore !== undefined &&
            (obj.energyStore = message.energyStore
                ? EnergyStore.toJSON(message.energyStore)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetEnergyStoreResponse,
        };
        if (object.energyStore !== undefined && object.energyStore !== null) {
            message.energyStore = EnergyStore.fromPartial(object.energyStore);
        }
        else {
            message.energyStore = undefined;
        }
        return message;
    },
};
const baseQueryAllEnergyStoreRequest = {};
export const QueryAllEnergyStoreRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllEnergyStoreRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllEnergyStoreRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllEnergyStoreRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllEnergyStoreResponse = {};
export const QueryAllEnergyStoreResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.energyStore) {
            EnergyStore.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllEnergyStoreResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllEnergyStoreResponse,
        };
        message.energyStore = [];
        if (object.energyStore !== undefined && object.energyStore !== null) {
            for (const e of object.energyStore) {
                message.energyStore.push(EnergyStore.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.energyStore) {
            obj.energyStore = message.energyStore.map((e) => e ? EnergyStore.toJSON(e) : undefined);
        }
        else {
            obj.energyStore = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllEnergyStoreResponse,
        };
        message.energyStore = [];
        if (object.energyStore !== undefined && object.energyStore !== null) {
            for (const e of object.energyStore) {
                message.energyStore.push(EnergyStore.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SmartMeter(request) {
        const data = QueryGetSmartMeterRequest.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Query", "SmartMeter", data);
        return promise.then((data) => QueryGetSmartMeterResponse.decode(new Reader(data)));
    }
    SmartMeterAll(request) {
        const data = QueryAllSmartMeterRequest.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Query", "SmartMeterAll", data);
        return promise.then((data) => QueryAllSmartMeterResponse.decode(new Reader(data)));
    }
    EnergyStore(request) {
        const data = QueryGetEnergyStoreRequest.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Query", "EnergyStore", data);
        return promise.then((data) => QueryGetEnergyStoreResponse.decode(new Reader(data)));
    }
    EnergyStoreAll(request) {
        const data = QueryAllEnergyStoreRequest.encode(request).finish();
        const promise = this.rpc.request("kiprasdak.energija.energija.Query", "EnergyStoreAll", data);
        return promise.then((data) => QueryAllEnergyStoreResponse.decode(new Reader(data)));
    }
}
