<template>
  <v-app>
    <core-drawer />
    <core-view />
  </v-app>
</template>

<script>
export default {
  name: "DashboardIndex",

  components: {
    CoreDrawer: () => import("@/components/core/Drawer"),
    CoreView: () => import("@/components/core/View"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
