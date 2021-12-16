<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Aktyvūs užsakymai</h3>
    <span>|</span>
    <span>Aktyvių užsakymų pateikimas ir valdymas</span>
  </div>
  <div class="order-gap"></div>
  <div class="flex-container-top">
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
                ID
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
                Vertė
              </div>
              <!-- <div>
                <SpButton
                  @click="closeAllOrders"
                  target="_blank"
                  type="secondary"
                  :disabled="false"
                  >Atšaukti visus</SpButton
                >
              </div>-->
            </div>
            <div
              id="buyOrderList"
              v-for="currBOrder in currBOrders"
              v-bind:key="currBOrder"
            >
              <CurrentBuyOrders
                :id="currBOrder[0]"
                :amount="currBOrder[1]"
                :price="currBOrder[2]"
              />
            </div>
            <div
              id="sellOrderList"
              v-for="currSOrder in currSOrders"
              v-bind:key="currSOrder"
            >
              <CurrentSellOrders
                :id="currSOrder[0]"
                :amount="currSOrder[1]"
                :price="currSOrder[2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrentBuyOrders from "./CurrentBuyOrders.vue";
import CurrentSellOrders from "./CurrentSellOrders.vue";
export default {
  name: "CurrentOrders",
  components: {
    CurrentBuyOrders,
    CurrentSellOrders,
  },
  data() {
    return {
      currBOrders: [],
      currSOrders: [],
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
    await this.createCurrentBuyOrderList();
    await this.createCurrentSellOrderList();
  },
  methods: {
    async closeAllOrders() {
      const buyOrders = await this.getBuyOrders();
      const sellOrders = await this.getSellOrders();
      buyOrders.buyOrderBook.book.orders.forEach((order) => {
        if (order.creator === this.currentAccount) {
          this.closeBuyOrder(order.id);
        }
      });
      sellOrders.sellOrderBook.book.orders.forEach((order) => {
        if (order.creator === this.currentAccount) {
          this.closeSellOrder(order.id);
        }
      });
    },
    async closeBuyOrder(id_to_close) {
      const value = {
        creator: this.currentAccount,
        amountDenom: "watth",
        priceDenom: "token",
        orderID: id_to_close,
      };
      await this.$store.dispatch(
        "kiprasdak.energija.energija/sendMsgCancelBuyOrder",
        {
          value,
          fee: [],
          memo: [],
        }
      );
    },
    async closeSellOrder(id_to_close) {
      const value = {
        creator: this.currentAccount,
        amountDenom: "watth",
        priceDenom: "token",
        orderID: id_to_close,
      };
      await this.$store.dispatch(
        "kiprasdak.energija.energija/sendMsgCancelSellOrder",
        {
          value,
          fee: [],
          memo: [],
        }
      );
    },
    async createCurrentBuyOrderList() {
      const buyOrders = await this.getBuyOrders();
      var buyOrdersArray = [];
      buyOrders.buyOrderBook.book.orders.forEach((order) => {
        if (order.creator === this.currentAccount) {
          buyOrdersArray.push([order.id, order.amount, order.price]);
        }
      });
      this.currBOrders = buyOrdersArray;
      buyOrdersArray = [];
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
    async createCurrentSellOrderList() {
      const sellOrders = await this.getSellOrders();
      var sellOrdersArray = [];
      sellOrders.sellOrderBook.book.orders.forEach((order) => {
        if (order.creator === this.currentAccount) {
          sellOrdersArray.push([order.id, order.amount, order.price]);
        }
      });
      this.currSOrders = sellOrdersArray;
      sellOrdersArray = [];
    },
    async getSellOrders() {
      const sellOrders = await this.$store.dispatch(
        "kiprasdak.energija.energija/QuerySellOrderBook",
        {
          params: {
            index: "watth-token",
          },
        }
      );
      return sellOrders;
    },
  },
};
</script>
