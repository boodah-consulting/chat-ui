export default {
  addHandle(state, newHandle) {
    state.handle = newHandle;
  },
  addMessage(state, payload) {
    state.messages.push(payload);
  }
};
