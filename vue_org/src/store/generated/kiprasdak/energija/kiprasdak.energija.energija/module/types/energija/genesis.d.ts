import { SmartMeter } from "../energija/smart_meter";
import { EnergyStore } from "../energija/energy_store";
import { BuyOrderBook } from "../energija/buy_order_book";
import { SellOrderBook } from "../energija/sell_order_book";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kiprasdak.energija.energija";
/** GenesisState defines the energija module's genesis state. */
export interface GenesisState {
    smartMeterList: SmartMeter[];
    energyStoreList: EnergyStore[];
    buyOrderBookList: BuyOrderBook[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    sellOrderBookList: SellOrderBook[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
