<template>
  <div>
    <div class="container">
      <RegisterSmartMeter />
      <RegisterEnergyStore />
    </div>
  </div>
</template>

<script>
import RegisterSmartMeter from "@/components/RegisterSmartMeter";
import RegisterEnergyStore from "@/components/RegisterEnergyStore";
export default {
  name: "Simuliacija",
  components: { RegisterSmartMeter, RegisterEnergyStore },
};
</script>
