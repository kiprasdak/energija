import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "kiprasdak.energija.energija";
export interface MsgRegisterSmartMeter {
    creator: string;
    production: number;
    consumption: number;
    description: string;
}
export interface MsgRegisterSmartMeterResponse {
}
export interface MsgRegisterEnergyStore {
    creator: string;
    description: string;
}
export interface MsgRegisterEnergyStoreResponse {
}
export interface MsgTokenizeEnergy {
    creator: string;
    amount: number;
}
export interface MsgTokenizeEnergyResponse {
}
export declare const MsgRegisterSmartMeter: {
    encode(message: MsgRegisterSmartMeter, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterSmartMeter;
    fromJSON(object: any): MsgRegisterSmartMeter;
    toJSON(message: MsgRegisterSmartMeter): unknown;
    fromPartial(object: DeepPartial<MsgRegisterSmartMeter>): MsgRegisterSmartMeter;
};
export declare const MsgRegisterSmartMeterResponse: {
    encode(_: MsgRegisterSmartMeterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterSmartMeterResponse;
    fromJSON(_: any): MsgRegisterSmartMeterResponse;
    toJSON(_: MsgRegisterSmartMeterResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterSmartMeterResponse>): MsgRegisterSmartMeterResponse;
};
export declare const MsgRegisterEnergyStore: {
    encode(message: MsgRegisterEnergyStore, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterEnergyStore;
    fromJSON(object: any): MsgRegisterEnergyStore;
    toJSON(message: MsgRegisterEnergyStore): unknown;
    fromPartial(object: DeepPartial<MsgRegisterEnergyStore>): MsgRegisterEnergyStore;
};
export declare const MsgRegisterEnergyStoreResponse: {
    encode(_: MsgRegisterEnergyStoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterEnergyStoreResponse;
    fromJSON(_: any): MsgRegisterEnergyStoreResponse;
    toJSON(_: MsgRegisterEnergyStoreResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterEnergyStoreResponse>): MsgRegisterEnergyStoreResponse;
};
export declare const MsgTokenizeEnergy: {
    encode(message: MsgTokenizeEnergy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTokenizeEnergy;
    fromJSON(object: any): MsgTokenizeEnergy;
    toJSON(message: MsgTokenizeEnergy): unknown;
    fromPartial(object: DeepPartial<MsgTokenizeEnergy>): MsgTokenizeEnergy;
};
export declare const MsgTokenizeEnergyResponse: {
    encode(_: MsgTokenizeEnergyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgTokenizeEnergyResponse;
    fromJSON(_: any): MsgTokenizeEnergyResponse;
    toJSON(_: MsgTokenizeEnergyResponse): unknown;
    fromPartial(_: DeepPartial<MsgTokenizeEnergyResponse>): MsgTokenizeEnergyResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
    RegisterEnergyStore(request: MsgRegisterEnergyStore): Promise<MsgRegisterEnergyStoreResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    TokenizeEnergy(request: MsgTokenizeEnergy): Promise<MsgTokenizeEnergyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
    RegisterEnergyStore(request: MsgRegisterEnergyStore): Promise<MsgRegisterEnergyStoreResponse>;
    TokenizeEnergy(request: MsgTokenizeEnergy): Promise<MsgTokenizeEnergyResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
