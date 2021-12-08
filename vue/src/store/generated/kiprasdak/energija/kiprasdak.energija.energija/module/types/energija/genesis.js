/* eslint-disable */
import { SmartMeter } from "../energija/smart_meter";
import { EnergyStore } from "../energija/energy_store";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "kiprasdak.energija.energija";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.smartMeterList) {
            SmartMeter.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.energyStoreList) {
            EnergyStore.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.smartMeterList = [];
        message.energyStoreList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.smartMeterList.push(SmartMeter.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.energyStoreList.push(EnergyStore.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.smartMeterList = [];
        message.energyStoreList = [];
        if (object.smartMeterList !== undefined && object.smartMeterList !== null) {
            for (const e of object.smartMeterList) {
                message.smartMeterList.push(SmartMeter.fromJSON(e));
            }
        }
        if (object.energyStoreList !== undefined &&
            object.energyStoreList !== null) {
            for (const e of object.energyStoreList) {
                message.energyStoreList.push(EnergyStore.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.smartMeterList) {
            obj.smartMeterList = message.smartMeterList.map((e) => e ? SmartMeter.toJSON(e) : undefined);
        }
        else {
            obj.smartMeterList = [];
        }
        if (message.energyStoreList) {
            obj.energyStoreList = message.energyStoreList.map((e) => e ? EnergyStore.toJSON(e) : undefined);
        }
        else {
            obj.energyStoreList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.smartMeterList = [];
        message.energyStoreList = [];
        if (object.smartMeterList !== undefined && object.smartMeterList !== null) {
            for (const e of object.smartMeterList) {
                message.smartMeterList.push(SmartMeter.fromPartial(e));
            }
        }
        if (object.energyStoreList !== undefined &&
            object.energyStoreList !== null) {
            for (const e of object.energyStoreList) {
                message.energyStoreList.push(EnergyStore.fromPartial(e));
            }
        }
        return message;
    },
};
