import { txClient, queryClient, MissingWalletError } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { BuyOrderBook } from "./module/types/energija/buy_order_book"
import { EnergyStore } from "./module/types/energija/energy_store"
import { OrderBook } from "./module/types/energija/order"
import { Order } from "./module/types/energija/order"
import { SellOrderBook } from "./module/types/energija/sell_order_book"
import { SmartMeter } from "./module/types/energija/smart_meter"


export { BuyOrderBook, EnergyStore, OrderBook, Order, SellOrderBook, SmartMeter };

async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function mergeResults(value, next_values) {
	for (let prop of Object.keys(next_values)) {
		if (Array.isArray(next_values[prop])) {
			value[prop]=[...value[prop], ...next_values[prop]]
		}else{
			value[prop]=next_values[prop]
		}
	}
	return value
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
				SmartMeter: {},
				SmartMeterAll: {},
				EnergyStore: {},
				EnergyStoreAll: {},
				BuyOrderBook: {},
				BuyOrderBookAll: {},
				SellOrderBook: {},
				SellOrderBookAll: {},
				
				_Structure: {
						BuyOrderBook: getStructure(BuyOrderBook.fromPartial({})),
						EnergyStore: getStructure(EnergyStore.fromPartial({})),
						OrderBook: getStructure(OrderBook.fromPartial({})),
						Order: getStructure(Order.fromPartial({})),
						SellOrderBook: getStructure(SellOrderBook.fromPartial({})),
						SmartMeter: getStructure(SmartMeter.fromPartial({})),
						
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
				getSmartMeter: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SmartMeter[JSON.stringify(params)] ?? {}
		},
				getSmartMeterAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SmartMeterAll[JSON.stringify(params)] ?? {}
		},
				getEnergyStore: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyStore[JSON.stringify(params)] ?? {}
		},
				getEnergyStoreAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.EnergyStoreAll[JSON.stringify(params)] ?? {}
		},
				getBuyOrderBook: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BuyOrderBook[JSON.stringify(params)] ?? {}
		},
				getBuyOrderBookAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.BuyOrderBookAll[JSON.stringify(params)] ?? {}
		},
				getSellOrderBook: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SellOrderBook[JSON.stringify(params)] ?? {}
		},
				getSellOrderBookAll: (state) => (params = { params: {}}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SellOrderBookAll[JSON.stringify(params)] ?? {}
		},
				
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('Vuex module: kiprasdak.energija.energija initialized!')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach(async (subscription) => {
				try {
					await dispatch(subscription.action, subscription.payload)
				}catch(e) {
					throw new SpVuexError('Subscriptions: ' + e.message)
				}
			})
		},
		
		
		
		 		
		
		
		async QuerySmartMeter({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySmartMeter( key.index)).data
				
					
				commit('QUERY', { query: 'SmartMeter', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySmartMeter', payload: { options: { all }, params: {...key},query }})
				return getters['getSmartMeter']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySmartMeter', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySmartMeterAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySmartMeterAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.querySmartMeterAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SmartMeterAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySmartMeterAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSmartMeterAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySmartMeterAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyStore({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEnergyStore( key.index)).data
				
					
				commit('QUERY', { query: 'EnergyStore', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyStore', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyStore']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryEnergyStore', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryEnergyStoreAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryEnergyStoreAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryEnergyStoreAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'EnergyStoreAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryEnergyStoreAll', payload: { options: { all }, params: {...key},query }})
				return getters['getEnergyStoreAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryEnergyStoreAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBuyOrderBook({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBuyOrderBook( key.index)).data
				
					
				commit('QUERY', { query: 'BuyOrderBook', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBuyOrderBook', payload: { options: { all }, params: {...key},query }})
				return getters['getBuyOrderBook']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryBuyOrderBook', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QueryBuyOrderBookAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.queryBuyOrderBookAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.queryBuyOrderBookAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'BuyOrderBookAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryBuyOrderBookAll', payload: { options: { all }, params: {...key},query }})
				return getters['getBuyOrderBookAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QueryBuyOrderBookAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySellOrderBook({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySellOrderBook( key.index)).data
				
					
				commit('QUERY', { query: 'SellOrderBook', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySellOrderBook', payload: { options: { all }, params: {...key},query }})
				return getters['getSellOrderBook']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySellOrderBook', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		
		
		 		
		
		
		async QuerySellOrderBookAll({ commit, rootGetters, getters }, { options: { subscribe, all} = { subscribe:false, all:false}, params: {...key}, query=null }) {
			try {
				const queryClient=await initQueryClient(rootGetters)
				let value= (await queryClient.querySellOrderBookAll(query)).data
				
					
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await queryClient.querySellOrderBookAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					value = mergeResults(value, next_values);
				}
				commit('QUERY', { query: 'SellOrderBookAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySellOrderBookAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSellOrderBookAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				throw new SpVuexError('QueryClient:QuerySellOrderBookAll', 'API Node Unavailable. Could not perform query: ' + e.message)
				
			}
		},
		
		
		async sendMsgCancelBuyOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelBuyOrder(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelBuyOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelBuyOrder:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterSmartMeter({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegisterSmartMeter(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRegisterSmartMeter:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRegisterSmartMeter:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCancelSellOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelSellOrder(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelSellOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelSellOrder:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgEnergizeToken({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgEnergizeToken(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgEnergizeToken:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgEnergizeToken:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgCreatePair({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePair(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCreatePair:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePair:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgRegisterEnergyStore({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegisterEnergyStore(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRegisterEnergyStore:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRegisterEnergyStore:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgBuyOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuyOrder(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgBuyOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgBuyOrder:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgTokenizeEnergy({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgTokenizeEnergy(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgTokenizeEnergy:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgTokenizeEnergy:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		async sendMsgSellOrder({ rootGetters }, { value, fee = [], memo = '' }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSellOrder(value)
				const result = await txClient.signAndBroadcast([msg], {fee: { amount: fee, 
	gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSellOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSellOrder:Send', 'Could not broadcast Tx: '+ e.message)
				}
			}
		},
		
		async MsgCancelBuyOrder({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelBuyOrder(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelBuyOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelBuyOrder:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgRegisterSmartMeter({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegisterSmartMeter(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRegisterSmartMeter:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRegisterSmartMeter:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgCancelSellOrder({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCancelSellOrder(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCancelSellOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCancelSellOrder:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgEnergizeToken({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgEnergizeToken(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgEnergizeToken:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgEnergizeToken:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgCreatePair({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgCreatePair(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgCreatePair:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreatePair:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgRegisterEnergyStore({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgRegisterEnergyStore(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgRegisterEnergyStore:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgRegisterEnergyStore:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgBuyOrder({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgBuyOrder(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgBuyOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgBuyOrder:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgTokenizeEnergy({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgTokenizeEnergy(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgTokenizeEnergy:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgTokenizeEnergy:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		async MsgSellOrder({ rootGetters }, { value }) {
			try {
				const txClient=await initTxClient(rootGetters)
				const msg = await txClient.msgSellOrder(value)
				return msg
			} catch (e) {
				if (e == MissingWalletError) {
					throw new SpVuexError('TxClient:MsgSellOrder:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSellOrder:Create', 'Could not create message: ' + e.message)
					
				}
			}
		},
		
	}
}
