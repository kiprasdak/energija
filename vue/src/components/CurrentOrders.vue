<template>
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
              <div>
                <SpButton
                  @click="Order"
                  target="_blank"
                  type="secondary"
                  :disabled="false"
                  >Uždaryti visus</SpButton
                >
              </div>
            </div>
            <div
              class="order-gap"
              id="buyOrderList"
              v-for="currOrder in currOrders"
              v-bind:key="currOrder"
            >
              <CurrentBuyOrders
                :id="currOrder[0]"
                :amount="currOrder[1]"
                :price="currOrder[2]"
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
export default {
  name: "CurrentOrders",
  components: {
    CurrentBuyOrders,
  },
  data() {
    return {
      currOrders: [
        [1, 22, 33],
        [2, 33, 44],
        [3, 44, 55],
      ],
    };
  },
  created: async function () {
    await this.createCurrentBuyOrderList();
  },
  methods: {
    async createCurrentBuyOrderList() {
      const buyOrders = await this.getBuyOrders();
      var buyOrdersArray = [];
      buyOrders.buyOrderBook.book.orders.forEach((order) => {
        buyOrdersArray.push([order.id, order.amount, order.price]);
      });
      this.currOrders = buyOrdersArray;
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
  },
};
</script>
