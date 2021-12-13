<template>
  <div>
    <div class="container">
      <DeTokenize />
      <CurrentOrders />
      <OrderBook />
    </div>
  </div>
</template>

<script>
import DeTokenize from "@/components/DeTokenize.vue";
import OrderBook from "@/components/OrderBook.vue";
import CurrentOrders from "@/components/CurrentOrders.vue";
export default {
  name: "Birza",
  components: { DeTokenize, OrderBook, CurrentOrders },
};
</script>
