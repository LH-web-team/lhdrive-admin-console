<template>
  <v-app>
    <core-drawer />
    <core-app-bar />
    <core-view />
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreView: () => import("@/components/core/View"),
    CoreAppBar: () => import("@/components/core/AppBar")
  }
};
</script>
