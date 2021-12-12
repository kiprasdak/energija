<template>
  <div>
    <div class="container">
      <DeTokenize />
      <OrderBook />
    </div>
  </div>
</template>

<script>
import DeTokenize from "@/components/DeTokenize.vue";
import OrderBook from "@/components/OrderBook.vue";
export default {
  name: "Birza",
  components: { DeTokenize, OrderBook },
};
</script>
