import Vue from "vue";
import Vuex from "vuex";

import messenger from '@/store/modules/messenger'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messenger
  }
});
