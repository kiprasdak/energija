import { Reader, Writer } from "protobufjs/minimal";
import { SmartMeter } from "../energija/smart_meter";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { EnergyStore } from "../energija/energy_store";
export declare const protobufPackage = "kiprasdak.energija.energija";
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
export declare const QueryGetSmartMeterRequest: {
    encode(message: QueryGetSmartMeterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSmartMeterRequest;
    fromJSON(object: any): QueryGetSmartMeterRequest;
    toJSON(message: QueryGetSmartMeterRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSmartMeterRequest>): QueryGetSmartMeterRequest;
};
export declare const QueryGetSmartMeterResponse: {
    encode(message: QueryGetSmartMeterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSmartMeterResponse;
    fromJSON(object: any): QueryGetSmartMeterResponse;
    toJSON(message: QueryGetSmartMeterResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSmartMeterResponse>): QueryGetSmartMeterResponse;
};
export declare const QueryAllSmartMeterRequest: {
    encode(message: QueryAllSmartMeterRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSmartMeterRequest;
    fromJSON(object: any): QueryAllSmartMeterRequest;
    toJSON(message: QueryAllSmartMeterRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSmartMeterRequest>): QueryAllSmartMeterRequest;
};
export declare const QueryAllSmartMeterResponse: {
    encode(message: QueryAllSmartMeterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSmartMeterResponse;
    fromJSON(object: any): QueryAllSmartMeterResponse;
    toJSON(message: QueryAllSmartMeterResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSmartMeterResponse>): QueryAllSmartMeterResponse;
};
export declare const QueryGetEnergyStoreRequest: {
    encode(message: QueryGetEnergyStoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEnergyStoreRequest;
    fromJSON(object: any): QueryGetEnergyStoreRequest;
    toJSON(message: QueryGetEnergyStoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEnergyStoreRequest>): QueryGetEnergyStoreRequest;
};
export declare const QueryGetEnergyStoreResponse: {
    encode(message: QueryGetEnergyStoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEnergyStoreResponse;
    fromJSON(object: any): QueryGetEnergyStoreResponse;
    toJSON(message: QueryGetEnergyStoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEnergyStoreResponse>): QueryGetEnergyStoreResponse;
};
export declare const QueryAllEnergyStoreRequest: {
    encode(message: QueryAllEnergyStoreRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEnergyStoreRequest;
    fromJSON(object: any): QueryAllEnergyStoreRequest;
    toJSON(message: QueryAllEnergyStoreRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEnergyStoreRequest>): QueryAllEnergyStoreRequest;
};
export declare const QueryAllEnergyStoreResponse: {
    encode(message: QueryAllEnergyStoreResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEnergyStoreResponse;
    fromJSON(object: any): QueryAllEnergyStoreResponse;
    toJSON(message: QueryAllEnergyStoreResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEnergyStoreResponse>): QueryAllEnergyStoreResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a smartMeter by index. */
    SmartMeter(request: QueryGetSmartMeterRequest): Promise<QueryGetSmartMeterResponse>;
    /** Queries a list of smartMeter items. */
    SmartMeterAll(request: QueryAllSmartMeterRequest): Promise<QueryAllSmartMeterResponse>;
    /** Queries a energyStore by index. */
    EnergyStore(request: QueryGetEnergyStoreRequest): Promise<QueryGetEnergyStoreResponse>;
    /** Queries a list of energyStore items. */
    EnergyStoreAll(request: QueryAllEnergyStoreRequest): Promise<QueryAllEnergyStoreResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SmartMeter(request: QueryGetSmartMeterRequest): Promise<QueryGetSmartMeterResponse>;
    SmartMeterAll(request: QueryAllSmartMeterRequest): Promise<QueryAllSmartMeterResponse>;
    EnergyStore(request: QueryGetEnergyStoreRequest): Promise<QueryGetEnergyStoreResponse>;
    EnergyStoreAll(request: QueryAllEnergyStoreRequest): Promise<QueryAllEnergyStoreResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
