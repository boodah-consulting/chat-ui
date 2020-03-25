import Messages from "@/collections/messages";
import Message from "@/models/message";

export default {
  initialiseMessages({ commit }, messages = new Messages()) {
    messages.fetch().then(() => {
      commit("initialiseMessages", messages);
    });
  },
  addHandle({ commit }, newHandle) {
    commit("addHandle", newHandle);
  },
  addMessage({ commit }, payload) {
    let newMessage = new Message(payload);

    commit("addMessage", payload);
    newMessage
      .save()
      .then(() => {
      })
      .catch(error => {
        console.error("Problem saving messages: ", error);
      });
  }
};
