import Vue from "vue";
import Vuex from "vuex";

import state from "@/store/modules/messenger/state";
import getters from "@/store/modules/messenger/getters";
import actions from "@/store/modules/messenger/actions";
import mutations from "@/store/modules/messenger/mutations";

Vue.use(Vuex);

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

