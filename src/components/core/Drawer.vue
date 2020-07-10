<template>
  <v-navigation-drawer
    src="@/assets/bg.png"
    dark
    app
    width="260"
    class="pa-1"
    :miniVariant="!smAndDown && $store.state.miniVariant"
    :expand-on-hover="!smAndDown && $store.state.miniVariant"
    mini-variant-width="80"
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line class="justify-start">
        <v-list-item-avatar>
          <img src="@/assets/lhdrive-icon.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="font-size:20px">Super Admin</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mb-2"></v-divider>

      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        class="py-2 px-4 justify-start"
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append v-if="!(!smAndDown && $store.state.miniVariant)">
      <div class="pa-2">
        <v-btn block color="grey darken-2">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "CoreDrawer",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        {
          title: "User Manager",
          icon: "mdi-key",
          to: "/UserManager"
        }
      ]
    };
  },
  computed: {
    xlAndUp() {
      return this.$vuetify.breakpoint.xl;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
};
</script>

<style scoped></style>
