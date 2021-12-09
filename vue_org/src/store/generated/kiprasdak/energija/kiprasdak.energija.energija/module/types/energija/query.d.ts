import { Reader, Writer } from "protobufjs/minimal";
import { SmartMeter } from "../energija/smart_meter";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { EnergyStore } from "../energija/energy_store";
import { BuyOrderBook } from "../energija/buy_order_book";
import { SellOrderBook } from "../energija/sell_order_book";
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
export interface QueryGetBuyOrderBookRequest {
    index: string;
}
export interface QueryGetBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook | undefined;
}
export interface QueryAllBuyOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllBuyOrderBookResponse {
    buyOrderBook: BuyOrderBook[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSellOrderBookRequest {
    index: string;
}
export interface QueryGetSellOrderBookResponse {
    sellOrderBook: SellOrderBook | undefined;
}
export interface QueryAllSellOrderBookRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSellOrderBookResponse {
    sellOrderBook: SellOrderBook[];
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
export declare const QueryGetBuyOrderBookRequest: {
    encode(message: QueryGetBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookRequest;
    fromJSON(object: any): QueryGetBuyOrderBookRequest;
    toJSON(message: QueryGetBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookRequest>): QueryGetBuyOrderBookRequest;
};
export declare const QueryGetBuyOrderBookResponse: {
    encode(message: QueryGetBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetBuyOrderBookResponse;
    fromJSON(object: any): QueryGetBuyOrderBookResponse;
    toJSON(message: QueryGetBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetBuyOrderBookResponse>): QueryGetBuyOrderBookResponse;
};
export declare const QueryAllBuyOrderBookRequest: {
    encode(message: QueryAllBuyOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookRequest;
    fromJSON(object: any): QueryAllBuyOrderBookRequest;
    toJSON(message: QueryAllBuyOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookRequest>): QueryAllBuyOrderBookRequest;
};
export declare const QueryAllBuyOrderBookResponse: {
    encode(message: QueryAllBuyOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllBuyOrderBookResponse;
    fromJSON(object: any): QueryAllBuyOrderBookResponse;
    toJSON(message: QueryAllBuyOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBuyOrderBookResponse>): QueryAllBuyOrderBookResponse;
};
export declare const QueryGetSellOrderBookRequest: {
    encode(message: QueryGetSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookRequest;
    fromJSON(object: any): QueryGetSellOrderBookRequest;
    toJSON(message: QueryGetSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookRequest>): QueryGetSellOrderBookRequest;
};
export declare const QueryGetSellOrderBookResponse: {
    encode(message: QueryGetSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSellOrderBookResponse;
    fromJSON(object: any): QueryGetSellOrderBookResponse;
    toJSON(message: QueryGetSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSellOrderBookResponse>): QueryGetSellOrderBookResponse;
};
export declare const QueryAllSellOrderBookRequest: {
    encode(message: QueryAllSellOrderBookRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookRequest;
    fromJSON(object: any): QueryAllSellOrderBookRequest;
    toJSON(message: QueryAllSellOrderBookRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookRequest>): QueryAllSellOrderBookRequest;
};
export declare const QueryAllSellOrderBookResponse: {
    encode(message: QueryAllSellOrderBookResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSellOrderBookResponse;
    fromJSON(object: any): QueryAllSellOrderBookResponse;
    toJSON(message: QueryAllSellOrderBookResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSellOrderBookResponse>): QueryAllSellOrderBookResponse;
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
    /** Queries a buyOrderBook by index. */
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    /** Queries a list of buyOrderBook items. */
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    /** Queries a sellOrderBook by index. */
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    /** Queries a list of sellOrderBook items. */
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SmartMeter(request: QueryGetSmartMeterRequest): Promise<QueryGetSmartMeterResponse>;
    SmartMeterAll(request: QueryAllSmartMeterRequest): Promise<QueryAllSmartMeterResponse>;
    EnergyStore(request: QueryGetEnergyStoreRequest): Promise<QueryGetEnergyStoreResponse>;
    EnergyStoreAll(request: QueryAllEnergyStoreRequest): Promise<QueryAllEnergyStoreResponse>;
    BuyOrderBook(request: QueryGetBuyOrderBookRequest): Promise<QueryGetBuyOrderBookResponse>;
    BuyOrderBookAll(request: QueryAllBuyOrderBookRequest): Promise<QueryAllBuyOrderBookResponse>;
    SellOrderBook(request: QueryGetSellOrderBookRequest): Promise<QueryGetSellOrderBookResponse>;
    SellOrderBookAll(request: QueryAllSellOrderBookRequest): Promise<QueryAllSellOrderBookResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
