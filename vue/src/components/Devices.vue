<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Energijos įrenginiai</h3>
    <span>|</span>
    <span>Protingas skaitliukas, energijos talpa</span>
  </div>
  <div class="flex-container">
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <p></p>
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-prod">
                <span class="sp-icon sp-icon-Add"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1 class="symbl-prod-text">
                  Energijos produkcijos kiekis:
                  {{ production }} W/h
                </h1>
              </div>
            </div>
            <div class="flex-container">
              <div class="symbl-cons">
                <span class="sp-icon sp-icon-DownArrow"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1 class="symbl-cons-text">
                  Energijos vartojimo kiekis: {{ consumption }} W/h
                </h1>
              </div>
            </div>
            <div class="flex-container">
              <div class="symbl-desc">
                <span class="sp-icon sp-icon-Form"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1>{{ descriptionSM }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <p></p>
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-prod">
                <span class="sp-icon sp-icon-Transactions"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1 class="symbl-prod-text">
                  Talpinama energija: {{ stored }} W/h
                </h1>
              </div>
            </div>
            <div class="flex-container">
              <div class="symbl-prod">
                <span class="sp-icon sp-icon-Lock"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1 class="symbl-prod-text">
                  Rezervuota energija: {{ reserved }} W/h
                </h1>
              </div>
            </div>
            <div class="flex-container">
              <div class="symbl-desc">
                <span class="sp-icon sp-icon-Form"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <h1>{{ descriptionES }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Devices",
  data() {
    return {
      production: 0,
      consumption: 0,
      descriptionSM: "",
      stored: 0,
      reserved: 0,
      descriptionES: "",
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
    window.setInterval(() => this.getDeviceValues(), 1000);
  },
  methods: {
    async getDeviceValues() {
      var smartMeter = await this.getSmartMeter();
      this.production = smartMeter.smartMeter.production;
      this.consumption = smartMeter.smartMeter.consumption;
      this.descriptionSM = smartMeter.smartMeter.description;
      var energyStore = await this.getEnergyStore();
      this.stored = energyStore.energyStore.stored;
      this.reserved = energyStore.energyStore.reserved;
      this.descriptionES = energyStore.energyStore.description;
    },
    async getSmartMeter() {
      const smartMeter = this.$store.dispatch(
        "kiprasdak.energija.energija/QuerySmartMeter",
        {
          params: {
            index: this.currentAccount,
          },
        }
      );
      return smartMeter;
    },
    async getEnergyStore() {
      var energyStore = this.$store.dispatch(
        "kiprasdak.energija.energija/QueryEnergyStore",
        {
          params: {
            index: this.currentAccount,
          },
        }
      );
      return energyStore;
    },
  },
};
</script>
