import { SmartMeter } from "../energija/smart_meter";
import { EnergyStore } from "../energija/energy_store";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kiprasdak.energija.energija";
/** GenesisState defines the energija module's genesis state. */
export interface GenesisState {
    smartMeterList: SmartMeter[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    energyStoreList: EnergyStore[];
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
