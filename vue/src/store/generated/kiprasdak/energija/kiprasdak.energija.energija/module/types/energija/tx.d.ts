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
export interface MsgCreatePair {
    creator: string;
    sourceDenom: string;
    targetDenom: string;
}
export interface MsgCreatePairResponse {
}
export interface MsgSellOrder {
    creator: string;
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
export interface MsgSellOrderResponse {
}
export interface MsgBuyOrder {
    creator: string;
    amountDenom: string;
    amount: number;
    priceDenom: string;
    price: number;
}
export interface MsgBuyOrderResponse {
}
export interface MsgCancelBuyOrder {
    creator: string;
    amountDenom: string;
    priceDenom: string;
    orderID: number;
}
export interface MsgCancelBuyOrderResponse {
}
export interface MsgCancelSellOrder {
    creator: string;
    amountDenom: string;
    priceDenom: string;
    orderID: number;
}
export interface MsgCancelSellOrderResponse {
}
export interface MsgEnergizeToken {
    creator: string;
    amount: number;
}
export interface MsgEnergizeTokenResponse {
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
export declare const MsgCreatePair: {
    encode(message: MsgCreatePair, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePair;
    fromJSON(object: any): MsgCreatePair;
    toJSON(message: MsgCreatePair): unknown;
    fromPartial(object: DeepPartial<MsgCreatePair>): MsgCreatePair;
};
export declare const MsgCreatePairResponse: {
    encode(_: MsgCreatePairResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePairResponse;
    fromJSON(_: any): MsgCreatePairResponse;
    toJSON(_: MsgCreatePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePairResponse>): MsgCreatePairResponse;
};
export declare const MsgSellOrder: {
    encode(message: MsgSellOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSellOrder;
    fromJSON(object: any): MsgSellOrder;
    toJSON(message: MsgSellOrder): unknown;
    fromPartial(object: DeepPartial<MsgSellOrder>): MsgSellOrder;
};
export declare const MsgSellOrderResponse: {
    encode(_: MsgSellOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSellOrderResponse;
    fromJSON(_: any): MsgSellOrderResponse;
    toJSON(_: MsgSellOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgSellOrderResponse>): MsgSellOrderResponse;
};
export declare const MsgBuyOrder: {
    encode(message: MsgBuyOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyOrder;
    fromJSON(object: any): MsgBuyOrder;
    toJSON(message: MsgBuyOrder): unknown;
    fromPartial(object: DeepPartial<MsgBuyOrder>): MsgBuyOrder;
};
export declare const MsgBuyOrderResponse: {
    encode(_: MsgBuyOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyOrderResponse;
    fromJSON(_: any): MsgBuyOrderResponse;
    toJSON(_: MsgBuyOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyOrderResponse>): MsgBuyOrderResponse;
};
export declare const MsgCancelBuyOrder: {
    encode(message: MsgCancelBuyOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelBuyOrder;
    fromJSON(object: any): MsgCancelBuyOrder;
    toJSON(message: MsgCancelBuyOrder): unknown;
    fromPartial(object: DeepPartial<MsgCancelBuyOrder>): MsgCancelBuyOrder;
};
export declare const MsgCancelBuyOrderResponse: {
    encode(_: MsgCancelBuyOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelBuyOrderResponse;
    fromJSON(_: any): MsgCancelBuyOrderResponse;
    toJSON(_: MsgCancelBuyOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelBuyOrderResponse>): MsgCancelBuyOrderResponse;
};
export declare const MsgCancelSellOrder: {
    encode(message: MsgCancelSellOrder, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelSellOrder;
    fromJSON(object: any): MsgCancelSellOrder;
    toJSON(message: MsgCancelSellOrder): unknown;
    fromPartial(object: DeepPartial<MsgCancelSellOrder>): MsgCancelSellOrder;
};
export declare const MsgCancelSellOrderResponse: {
    encode(_: MsgCancelSellOrderResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelSellOrderResponse;
    fromJSON(_: any): MsgCancelSellOrderResponse;
    toJSON(_: MsgCancelSellOrderResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse;
};
export declare const MsgEnergizeToken: {
    encode(message: MsgEnergizeToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEnergizeToken;
    fromJSON(object: any): MsgEnergizeToken;
    toJSON(message: MsgEnergizeToken): unknown;
    fromPartial(object: DeepPartial<MsgEnergizeToken>): MsgEnergizeToken;
};
export declare const MsgEnergizeTokenResponse: {
    encode(_: MsgEnergizeTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEnergizeTokenResponse;
    fromJSON(_: any): MsgEnergizeTokenResponse;
    toJSON(_: MsgEnergizeTokenResponse): unknown;
    fromPartial(_: DeepPartial<MsgEnergizeTokenResponse>): MsgEnergizeTokenResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
    RegisterEnergyStore(request: MsgRegisterEnergyStore): Promise<MsgRegisterEnergyStoreResponse>;
    TokenizeEnergy(request: MsgTokenizeEnergy): Promise<MsgTokenizeEnergyResponse>;
    CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    SellOrder(request: MsgSellOrder): Promise<MsgSellOrderResponse>;
    BuyOrder(request: MsgBuyOrder): Promise<MsgBuyOrderResponse>;
    CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
    CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    EnergizeToken(request: MsgEnergizeToken): Promise<MsgEnergizeTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterSmartMeter(request: MsgRegisterSmartMeter): Promise<MsgRegisterSmartMeterResponse>;
    RegisterEnergyStore(request: MsgRegisterEnergyStore): Promise<MsgRegisterEnergyStoreResponse>;
    TokenizeEnergy(request: MsgTokenizeEnergy): Promise<MsgTokenizeEnergyResponse>;
    CreatePair(request: MsgCreatePair): Promise<MsgCreatePairResponse>;
    SellOrder(request: MsgSellOrder): Promise<MsgSellOrderResponse>;
    BuyOrder(request: MsgBuyOrder): Promise<MsgBuyOrderResponse>;
    CancelBuyOrder(request: MsgCancelBuyOrder): Promise<MsgCancelBuyOrderResponse>;
    CancelSellOrder(request: MsgCancelSellOrder): Promise<MsgCancelSellOrderResponse>;
    EnergizeToken(request: MsgEnergizeToken): Promise<MsgEnergizeTokenResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
