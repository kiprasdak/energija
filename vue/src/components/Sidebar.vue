<template>
  <SpSidebar
    v-on:sidebar-open="sidebarOpen = true"
    v-on:sidebar-close="sidebarOpen = false"
  >
    <template v-slot:default>
      <SpLinkIcon link="/" text="Transakcijos" icon="Dashboard" />
      <div class="sp-dash"></div>
      <SpLinkIcon link="/energija" text="Energija" icon="Modules" />
      <div class="sp-dash"></div>
      <SpLinkIcon link="/birza" text="Birža" icon="Token" />
      <div class="sp-dash"></div>
      <SpLinkIcon link="/simuliacija" text="Simuliacija" icon="Settings" />
    </template>
    <template v-slot:footer>
      <SpLinkIcon link="/relayers" text="Relayers" icon="AddNew" />
      <div class="sp-dash"></div>
      <SpStatusAPI :showText="sidebarOpen" />
      <SpStatusRPC :showText="sidebarOpen" />
      <SpStatusWS :showText="sidebarOpen" />
    </template>
  </SpSidebar>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebarOpen: true,
    };
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(["common", "wallet"]);
    },
  },
};
</script>
