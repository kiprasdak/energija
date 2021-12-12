// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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


const types = [
  ["/kiprasdak.energija.energija.MsgCancelBuyOrder", MsgCancelBuyOrder],
  ["/kiprasdak.energija.energija.MsgCancelSellOrder", MsgCancelSellOrder],
  ["/kiprasdak.energija.energija.MsgRegisterSmartMeter", MsgRegisterSmartMeter],
  ["/kiprasdak.energija.energija.MsgRegisterEnergyStore", MsgRegisterEnergyStore],
  ["/kiprasdak.energija.energija.MsgTokenizeEnergy", MsgTokenizeEnergy],
  ["/kiprasdak.energija.energija.MsgCreatePair", MsgCreatePair],
  ["/kiprasdak.energija.energija.MsgBuyOrder", MsgBuyOrder],
  ["/kiprasdak.energija.energija.MsgSellOrder", MsgSellOrder],
  ["/kiprasdak.energija.energija.MsgEnergizeToken", MsgEnergizeToken],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCancelBuyOrder: (data: MsgCancelBuyOrder): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgCancelBuyOrder", value: data }),
    msgCancelSellOrder: (data: MsgCancelSellOrder): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgCancelSellOrder", value: data }),
    msgRegisterSmartMeter: (data: MsgRegisterSmartMeter): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgRegisterSmartMeter", value: data }),
    msgRegisterEnergyStore: (data: MsgRegisterEnergyStore): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgRegisterEnergyStore", value: data }),
    msgTokenizeEnergy: (data: MsgTokenizeEnergy): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgTokenizeEnergy", value: data }),
    msgCreatePair: (data: MsgCreatePair): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgCreatePair", value: data }),
    msgBuyOrder: (data: MsgBuyOrder): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgBuyOrder", value: data }),
    msgSellOrder: (data: MsgSellOrder): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgSellOrder", value: data }),
    msgEnergizeToken: (data: MsgEnergizeToken): EncodeObject => ({ typeUrl: "/kiprasdak.energija.energija.MsgEnergizeToken", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
