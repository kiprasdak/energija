<template>
  <div>
    <div class="container">
      <SpWelcome />
      <RegisterSmartMeter />
    </div>
  </div>
</template>

<script>
import RegisterSmartMeter from "@/components/RegisterSmartMeter";
export default {
  name: "Simuliacija",
  components: { RegisterSmartMeter },
};
</script>
