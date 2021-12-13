<template>
  <div class="sp-token-send__header sp-component-title">
    <h3>Energijos žetono kūrimas</h3>
    <span>|</span>
    <span>Žetonai kuriami pagal talpinamos energijos kiekį</span>
  </div>
  <div class="flex-container">
    <div class="sp-component sp-welcome flex-child">
      <div class="sp-box sp-shadow sp-welcome__main">
        <p></p>
        <div class="sp-token-send__main__form">
          <div class="sp-token-send__main__rcpt__wrapper">
            <div class="flex-container">
              <div class="symbl-prod">
                <span class="sp-icon sp-icon-Token"></span>
              </div>
              <div
                class="
                  sp-token-send__main__rcpt__input
                  sp-form-group
                  flex-child
                "
              >
                <input
                  class="sp-input"
                  v-model="amount"
                  type="number"
                  min="0"
                  :max="stored"
                  placeholder="Kuriamų žetonų kiekis W/h"
                />
              </div>
            </div>
            <div class="sp-welcome__btns">
              <SpButton
                @click="tokenize"
                target="_blank"
                type="primary"
                :disabled="false"
                >Sukurti energijos žetonus</SpButton
              >
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
            <div class="tokens">
              <h3>Energijos žetonai:</h3>
              <h2>{{ watth }} WATTH</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tokenize",
  data() {
    return {
      stored: 0,
      watth: 0,
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
    // window.setInterval(() => this.getTokenValues(), 2000);
    await this.getTokenValues();
  },
  methods: {
    async getTokenValues() {
      const energyStore = await this.getEnergyStore();
      this.stored = energyStore.energyStore.stored;
      const WATTH = await this.getWATTH();
      WATTH.balances.forEach((balance) => {
        if (balance.denom === "watth") {
          this.watth = balance.amount;
        }
      });
    },
    async getEnergyStore() {
      const energyStore = await this.$store.dispatch(
        "kiprasdak.energija.energija/QueryEnergyStore",
        {
          params: {
            index: this.currentAccount,
          },
        }
      );
      return energyStore;
    },
    async getWATTH() {
      const WATTH = await this.$store.dispatch(
        "cosmos.bank.v1beta1/QueryAllBalances",
        {
          params: { address: this.currentAccount },
        }
      );
      return WATTH;
    },
    async tokenize() {
      var wallet = document.getElementById("wallet");
      wallet.addEventListener("webkitAnimationEnd", function () {
        this.style.webkitAnimationName = "";
      });
      const value = {
        creator: this.currentAccount,
        amount: this.amount,
      };
      if (this.loggedIn == false) {
        document.getElementById("wallet").style.animation = "shake linear 1s";
      } else {
        var isEnergyStore = this.$store
          .dispatch("kiprasdak.energija.energija/QueryEnergyStore", {
            params: {
              index: this.currentAccount,
            },
          })
          .then((response) => {
            console.log(response);
            console.log("response ^");
            return true;
          })
          .catch((err) => {
            console.log(err);
            console.log("err ^");
            alert("Energijos talpa neegzistuoja");
            return false;
          });
        const isES = await isEnergyStore;
        if (isES == true) {
          await this.$store.dispatch(
            "kiprasdak.energija.energija/sendMsgTokenizeEnergy",
            {
              value,
              fee: [],
              memo: [],
            }
          );
          const WATTH = await this.getWATTH();
          WATTH.balances.forEach((balance) => {
            if (balance.denom === "watth") {
              this.watth = balance.amount;
            }
          });
        }
      }
    },
  },
};
</script>
