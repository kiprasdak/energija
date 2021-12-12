<template>
  <div>
    <div class="container">
      <Devices />
      <Tokenize />
    </div>
  </div>
</template>

<script>
import Devices from "@/components/Devices.vue";
import Tokenize from "@/components/Tokenize.vue";
export default {
  name: "Energija",
  components: { Devices, Tokenize },
};
</script>
