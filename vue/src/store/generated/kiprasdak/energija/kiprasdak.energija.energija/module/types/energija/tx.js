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
}
