export default {
  initialiseMessages(state, messages) {
    let newMessages = [];
    messages.models.forEach(function(message) {
      newMessages.push(message._attributes);
    });

    state.messages = newMessages;
  },
  addHandle(state, newHandle) {
    state.handle = newHandle;
  },
  addMessage(state, payload) {
    state.messages.push(payload);
  }
};
