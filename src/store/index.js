import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    miniVariant: true,
    selectedUser: null,
  },
  getters: {},
  mutations: {
    changeMiniVariant(state, payload) {
      if (payload) state.miniVariant = payload;
      else state.miniVariant = !state.miniVariant;
    },
    setSelectedUser(state, payload) {
      state.selectedUser = payload;
    },
  },
  actions: {},
  modules: {},
});
