<template>
  <div class="flex-container">
    <div class="symbl-prod">
      <span class="sp-icon sp-icon-UpArrow"></span>
    </div>
    <div
      class="sp-token-send__main__rcpt__input sp-form-group flex-child"
    ></div>
    <div class="sp-token-send__main__rcpt__input sp-form-group flex-child">
      {{ amount }}
    </div>
    <div class="sp-token-send__main__rcpt__input sp-form-group flex-child">
      <div>◾◾◾</div>
    </div>
    <div
      class="sp-token-send__main__rcpt__input sp-form-group flex-child-second"
    >
      {{ price }}
    </div>
  </div>
  <div class="order-gap"></div>
</template>

<script>
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "BuyOrder",
  props: {
    amount: String,
    price: String,
  },
});
</script>
