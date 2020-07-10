import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    miniVariant: true,
    drawer: true,
    selectedUser: null,
  },
  getters: {},
  mutations: {
    changeMiniVariant(state, payload) {
      if (payload) state.miniVariant = payload;
      else state.miniVariant = !state.miniVariant;
    },
    changeDrawer(state, payload) {
      if (payload) state.drawer = payload;
      else state.drawer = !state.drawer;
    },
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
  },
  actions: {},
  modules: {},
});
