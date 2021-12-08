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
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
