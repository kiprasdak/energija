<template>
  <div class="flex-container">
    <div class="symbl-prod">
      <span class="sp-icon sp-icon-UpArrow"></span>
    </div>
    <div
      class="sp-token-send__main__rcpt__input sp-form-group flex-child"
    ></div>
    <div
      class="sp-bold sp-token-send__main__rcpt__input sp-form-group flex-child"
    >
      {{ id }}
    </div>
    <div
      class="sp-token-send__main__rcpt__input sp-form-group flex-child"
    ></div>
    <div
      class="sp-bold sp-token-send__main__rcpt__input sp-form-group flex-child"
    >
      {{ amount }} WATTH
    </div>
    <div class="sp-token-send__main__rcpt__input sp-form-group flex-child">
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
      {{ price }} TOKEN
    </div>
    <div
      class="sp-token-send__main__rcpt__input sp-form-group flex-child"
    ></div>
    <div
      class="sp-bold sp-token-send__main__rcpt__input sp-form-group flex-child"
    >
      {{ amount * price }} TOKEN
    </div>
    <div>
      <SpButton
        class="btn-close"
        @click="closeOrder"
        target="_blank"
        type="secondary"
        :disabled="false"
        >Atšaukti</SpButton
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "CurrentBuyOrders",
  props: {
    id: String,
    price: String,
    amount: String,
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
  methods: {
    async closeOrder() {
      // const buyOrders = await this.getBuyOrders();
      // var currBuyOrdersArray = []
      // buyOrders.buyOrderBook.book.orders.forEach((order) => {
      //   if (order.creator ==== this.currentAccount)
      //     currBuyOrdersArray.push(order.id);
      // });
      const value = {
        creator: this.currentAccount,
        amountDenom: "watth",
        priceDenom: "token",
        orderID: this.id,
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
  },
});
</script>
