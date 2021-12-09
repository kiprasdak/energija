<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Protingo skaitliuko registracija</h3>
    <span>|</span>
    <span>Registracija vienam skaitliukui</span>
  </div>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <p></p>
      <div class="sp-token-send__main sp-box sp-shadow">
        <div class="sp-token-send__main__rcpt__wrapper">
          <div class="sp-token-send__main__rcpt__input sp-form-group">
            <input
              class="sp-input"
              v-model="production"
              type="number"
              min="0"
              placeholder="Energijos produkcijos kiekis W/h"
            />
          </div>
          <div class="sp-token-send__main__rcpt__input sp-form-group">
            <input
              class="sp-input"
              v-model="consumption"
              type="number"
              min="0"
              placeholder="Energijos vartojimo kiekis W/h"
            />
          </div>
          <div class="sp-token-send__main__rcpt__input sp-form-group">
            <input
              class="sp-input"
              v-model="description"
              type="text"
              maxlength="128"
              placeholder="Aprašymas"
            />
          </div>
          <div class="sp-welcome__btns">
            <SpButton
              href="https://docs.starport.network/"
              target="_blank"
              type="primary"
              >Documentation</SpButton
            >
            <SpButton
              href="https://github.com/tendermint/vue"
              @click="registerSmartMeter"
              target="_blank"
              type="secondary"
              class="sp-welcome__btns__github"
              >Github</SpButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterSmartMeter",
  methods: {
    registerSmartMeter(production, consumption) {
      this.$store.dispatch("registerSmartMeter");
    },
  },
};
</script>
