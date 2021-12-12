<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Energijos talpos registracija</h3>
    <span>|</span>
    <span>Registracija vienai energijos talpai</span>
  </div>
  <div class="sp-component sp-welcome">
    <div class="sp-box sp-shadow sp-welcome__main">
      <p></p>
      <div class="sp-token-send__main__form">
        <div class="sp-token-send__main__rcpt__wrapper">
          <div class="flex-container">
            <div class="symbl-prod">
              <span class="sp-icon sp-icon-Transactions"></span>
            </div>
            <div
              class="sp-token-send__main__rcpt__input sp-form-group flex-child"
            >
              <input
                class="sp-input"
                v-model="production"
                type="number"
                min="0"
                :disabled="true"
                placeholder="Talpinama energija W/h"
              />
            </div>
          </div>
          <div class="flex-container">
            <div class="symbl-prod">
              <span class="sp-icon sp-icon-Lock"></span>
            </div>
            <div
              class="sp-token-send__main__rcpt__input sp-form-group flex-child"
            >
              <input
                class="sp-input"
                v-model="consumption"
                type="number"
                min="0"
                :disabled="true"
                placeholder="Rezervuota energija W/h"
              />
            </div>
          </div>
          <div class="flex-container">
            <div class="symbl-desc">
              <span class="sp-icon sp-icon-Form"></span>
            </div>
            <div
              class="sp-token-send__main__rcpt__input sp-form-group flex-child"
            >
              <input
                class="sp-input"
                v-model="description"
                type="text"
                maxlength="96"
                placeholder="Protingo skaitliuko aprašymas"
              />
            </div>
          </div>
          <div class="sp-welcome__btns">
            <SpButton
              @click="registerEnergyStore"
              target="_blank"
              type="primary"
              :disabled="false"
              >Registruoti</SpButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterEnergyStore",
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
    async registerEnergyStore() {
      var wallet = document.getElementById("wallet");
      wallet.addEventListener("webkitAnimationEnd", function () {
        this.style.webkitAnimationName = "";
      });
      const value = {
        creator: this.currentAccount,
        description: this.description,
      };
      if (this.loggedIn == false) {
        document.getElementById("wallet").style.animation = "shake linear 1s";
      } else {
        var isEnergyStoreRegistered = this.$store
          .dispatch("kiprasdak.energija.energija/QueryEnergyStore", {
            params: {
              index: this.currentAccount,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("response ^");
            alert("Energijos talpa jau užregistruotas");
            return true;
          })
          .catch((err) => {
            console.log(err);
            console.log("err ^");
            return false;
          });
        const isESR = await isEnergyStoreRegistered;
        if (isESR == false) {
          await this.$store.dispatch(
            "kiprasdak.energija.energija/sendMsgRegisterEnergyStore",
            {
              value,
              fee: [],
              memo: [],
            }
          );
          alert("Energijos talpa sėkmingai užregistruotas");
          this.isRegister = true;
        }
      }
    },
  },
};
</script>
