import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "kiprasdak.energija.energija";
export interface EnergyStore {
    index: string;
    stored: number;
    reserved: number;
    description: string;
}
export declare const EnergyStore: {
    encode(message: EnergyStore, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EnergyStore;
    fromJSON(object: any): EnergyStore;
    toJSON(message: EnergyStore): unknown;
    fromPartial(object: DeepPartial<EnergyStore>): EnergyStore;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
