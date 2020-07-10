<template>
  <v-app-bar fixed app background="transparent" flat height="65">
    <v-btn class="ml-4 ml-md-8 mr-3" color="white" elevation="3" fab small @click="toggle">
      <v-icon v-if="!$store.state.miniVariant">mdi-dots-vertical</v-icon>
      <v-icon v-else>mdi-view-quilt</v-icon>
    </v-btn>
    <v-toolbar-title
      v-if="!$vuetify.breakpoint.smAndDown || !$store.state.selectedUser"
      v-text="$route.name"
    />
    <v-spacer class="hidden-sm-and-down" />
    <v-toolbar-title
      v-if="$store.state.selectedUser"
      class="font-weight-bold"
    >已選擇{{$store.state.selectedUser.name}}同學</v-toolbar-title>
    <div class="mx-4" />
  </v-app-bar>
</template>

<script>
export default {
  name: "CoreAppBar",
  methods: {
    changeMiniVariant() {
      this.$store.commit("changeMiniVariant");
    },
    changeDrawer() {
      this.$store.commit("changeDrawer");
    },
    toggle() {
      if (this.$vuetify.breakpoint.smAndDown) this.changeDrawer();
      else this.changeMiniVariant();
    }
  }
};
</script>

<style scoped>
.v-toolbar__title {
  font-size: 22px;
}
.v-btn:focus::before {
  opacity: 0 !important;
}
</style>
