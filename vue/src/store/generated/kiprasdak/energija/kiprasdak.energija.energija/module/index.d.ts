import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCancelBuyOrder } from "./types/energija/tx";
import { MsgCancelSellOrder } from "./types/energija/tx";
import { MsgRegisterSmartMeter } from "./types/energija/tx";
import { MsgRegisterEnergyStore } from "./types/energija/tx";
import { MsgTokenizeEnergy } from "./types/energija/tx";
import { MsgCreatePair } from "./types/energija/tx";
import { MsgBuyOrder } from "./types/energija/tx";
import { MsgSellOrder } from "./types/energija/tx";
import { MsgEnergizeToken } from "./types/energija/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCancelBuyOrder: (data: MsgCancelBuyOrder) => EncodeObject;
    msgCancelSellOrder: (data: MsgCancelSellOrder) => EncodeObject;
    msgRegisterSmartMeter: (data: MsgRegisterSmartMeter) => EncodeObject;
    msgRegisterEnergyStore: (data: MsgRegisterEnergyStore) => EncodeObject;
    msgTokenizeEnergy: (data: MsgTokenizeEnergy) => EncodeObject;
    msgCreatePair: (data: MsgCreatePair) => EncodeObject;
    msgBuyOrder: (data: MsgBuyOrder) => EncodeObject;
    msgSellOrder: (data: MsgSellOrder) => EncodeObject;
    msgEnergizeToken: (data: MsgEnergizeToken) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
