export default {
  addHandle({ commit }, newHandle) {
    commit("addHandle", newHandle);
  },
  addMessage({ commit }, payload) {
    commit("addMessage", payload);
  }
};
