// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuyOrder } from "./types/energija/tx";
import { MsgCancelBuyOrder } from "./types/energija/tx";
import { MsgRegisterEnergyStore } from "./types/energija/tx";
import { MsgCancelSellOrder } from "./types/energija/tx";
import { MsgTokenizeEnergy } from "./types/energija/tx";
import { MsgSellOrder } from "./types/energija/tx";
import { MsgEnergizeToken } from "./types/energija/tx";
import { MsgCreatePair } from "./types/energija/tx";
import { MsgRegisterSmartMeter } from "./types/energija/tx";
const types = [
    ["/kiprasdak.energija.energija.MsgBuyOrder", MsgBuyOrder],
    ["/kiprasdak.energija.energija.MsgCancelBuyOrder", MsgCancelBuyOrder],
    ["/kiprasdak.energija.energija.MsgRegisterEnergyStore", MsgRegisterEnergyStore],
    ["/kiprasdak.energija.energija.MsgCancelSellOrder", MsgCancelSellOrder],
    ["/kiprasdak.energija.energija.MsgTokenizeEnergy", MsgTokenizeEnergy],
    ["/kiprasdak.energija.energija.MsgSellOrder", MsgSellOrder],
    ["/kiprasdak.energija.energija.MsgEnergizeToken", MsgEnergizeToken],
    ["/kiprasdak.energija.energija.MsgCreatePair", MsgCreatePair],
    ["/kiprasdak.energija.energija.MsgRegisterSmartMeter", MsgRegisterSmartMeter],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgBuyOrder: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgBuyOrder", value: data }),
        msgCancelBuyOrder: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgCancelBuyOrder", value: data }),
        msgRegisterEnergyStore: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgRegisterEnergyStore", value: data }),
        msgCancelSellOrder: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgCancelSellOrder", value: data }),
        msgTokenizeEnergy: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgTokenizeEnergy", value: data }),
        msgSellOrder: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgSellOrder", value: data }),
        msgEnergizeToken: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgEnergizeToken", value: data }),
        msgCreatePair: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgCreatePair", value: data }),
        msgRegisterSmartMeter: (data) => ({ typeUrl: "/kiprasdak.energija.energija.MsgRegisterSmartMeter", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
