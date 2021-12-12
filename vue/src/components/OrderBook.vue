<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Energijos birža</h3>
    <span>|</span>
    <span>Energija pirkimas ir pardavimas</span>
  </div>
  <div class="flex-container">
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-prod">
                <span class="sp-icon sp-icon-Token"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <input
                  class="sp-input"
                  v-model="bamount"
                  type="number"
                  min="0"
                  placeholder="Kiekis W/h"
                />
              </div>
              <div class="sp-token-send__main__rcpt__input sp-form-group">
                <div>◾◾◾</div>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child-second
                "
              >
                <input
                  class="sp-input"
                  v-model="bprice"
                  type="number"
                  min="0"
                  placeholder="Kaina"
                />
              </div>
            </div>
            <div
              class="sp-welcome__btns sp-form-group btn-buy sp-rounded sp-line"
            >
              <SpButton
                @click="BuyOrder"
                target="_blank"
                type="secondary"
                :disabled="false"
                >Pirkti</SpButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-cons">
                <span class="sp-icon sp-icon-Token"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <input
                  class="sp-input"
                  v-model="samount"
                  type="number"
                  min="0"
                  placeholder="Kiekis W/h"
                />
              </div>
              <div class="sp-token-send__main__rcpt__input sp-form-group">
                <div>◾◾◾</div>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child-second
                "
              >
                <input
                  class="sp-input"
                  v-model="sprice"
                  type="number"
                  min="0"
                  :max="10000"
                  placeholder="Kaina"
                />
              </div>
            </div>
            <div
              class="sp-welcome__btns sp-form-group btn-sell sp-rounded sp-line"
            >
              <SpButton
                @click="SellOrder"
                target="_blank"
                type="secondary"
                :disabled="false"
                >Parduoti</SpButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-container">
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-invisible">
                <span class="sp"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              ></div>
              <div
                class="
                  sp-bold
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                Kiekis
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <div></div>
              </div>
              <div
                class="
                  sp-bold
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child-second
                "
              >
                Kaina
              </div>
            </div>
            <div
              class="order-gap"
              id="buyOrderList"
              v-for="order in buyOrders"
              v-bind:key="order"
            >
              {{ test }}
              <BuyOrder :amount="order[0]" :price="order[1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-cons">
                <span class="sp-icon sp-icon-DownArrow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BuyOrder from "./BuyOrder.vue";
export default {
  name: "OrderBook",
  components: {
    BuyOrder,
  },
  data() {
    return {
      stored: 0,
      watth: 0,
      samount: 0,
      sprice: 0,
      bamount: 0,
      bprice: 0,
      buyOrders: [[20, 30]],
    };
  },
  computed: {
    currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters["common/wallet/address"];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters["common/wallet/loggedIn"];
      } else {
        return false;
      }
    },
  },
  created: async function () {
    window.setInterval(() => this.createBuyOrderList(), 2000);
  },
  methods: {
    async createBuyOrderList() {
      await this.createTradingPair();
      const buyOrders = await this.getBuyOrders();
      var buyOrdersArray = [];
      buyOrders.buyOrderBook.book.orders.forEach((order) => {
        if (this.buyOrder.length < 10) {
          buyOrdersArray.push([order.amount, order.price]);
        } else {
          return;
        }
      });
      this.buyOrders = buyOrdersArray;
    },
    async getBuyOrders() {
      const buyOrders = await this.$store.dispatch(
        "kiprasdak.energija.energija/QueryBuyOrderBook",
        {
          params: {
            index: "watth-token",
          },
        }
      );
      return buyOrders;
    },
    async getTokenValues() {
      const energyStore = await this.getEnergyStore();
      this.stored = energyStore.energyStore.stored;
      const WATTH = await this.getWATTH();
      WATTH.balances.forEach((balance) => {
        if (balance.denom !== "watth") {
          this.watth = 0;
        } else {
          this.watth = balance.amount;
        }
      });
    },
    async getEnergyStore() {
      const energyStore = await this.$store.dispatch(
        "kiprasdak.energija.energija/QueryEnergyStore",
        {
          params: {
            index: this.currentAccount,
          },
        }
      );
      return energyStore;
    },
    async getWATTH() {
      const WATTH = await this.$store.dispatch(
        "cosmos.bank.v1beta1/QueryAllBalances",
        {
          params: { address: this.currentAccount },
        }
      );
      return WATTH;
    },
    async createTradingPair() {
      const value = {
        creator: this.currentAccount,
        sourceDenom: "watth",
        targetDenom: "token",
      };
      await this.$store.dispatch(
        "kiprasdak.energija.energija/sendMsgCreatePair",
        {
          value,
          fee: [],
          memo: [],
        }
      );
    },
    async BuyOrder() {
      var wallet = document.getElementById("wallet");
      wallet.addEventListener("webkitAnimationEnd", function () {
        this.style.webkitAnimationName = "";
      });
      if (this.loggedIn == false) {
        document.getElementById("wallet").style.animation = "shake linear 1s";
      } else {
        const value = {
          creator: this.currentAccount,
          amountDenom: "watth",
          amount: this.bamount,
          priceDenom: "token",
          price: this.bprice,
        };
        const isBuyOrder = await this.$store.dispatch(
          "kiprasdak.energija.energija/sendMsgBuyOrder",
          {
            value,
            fee: [],
            memo: [],
          }
        );
      }
    },
    async SellOrder() {
      var wallet = document.getElementById("wallet");
      wallet.addEventListener("webkitAnimationEnd", function () {
        this.style.webkitAnimationName = "";
      });
      if (this.loggedIn == false) {
        document.getElementById("wallet").style.animation = "shake linear 1s";
      } else {
        const value = {
          creator: this.currentAccount,
          amountDenom: "watth",
          amount: this.samount,
          priceDenom: "token",
          price: this.sprice,
        };
        const isBuyOrder = await this.$store.dispatch(
          "kiprasdak.energija.energija/sendMsgSellOrder",
          {
            value,
            fee: [],
            memo: [],
          }
        );
      }
    },
  },
};
</script>
