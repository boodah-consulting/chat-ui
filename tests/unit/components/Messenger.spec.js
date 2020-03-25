import Vuex from "vuex";
import { createLocalVue, mount } from "@vue/test-utils";

import Messenger from "@/components/Messenger.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

function getStore(handle, messages) {
  let store = {
    modules: {
      messenger: {
        namespaced: true,
        state: {
          messages: messages,
          handle: handle
        },
        getters: {
          messages: state => state.messages,
          handle: state => state.handle,
        }
      }
    }
  };

  return new Vuex.Store(store);
}

let factory = (handle, messages) => {
  let store = getStore(handle, messages);

  return mount(Messenger, {
    localVue,
    store,
    propsData: {
      handle: handle,
      messages: messages
    }
  });
};

describe("Messenger.vue", () => {
  let wrapper;
  let handle;
  let messages = [];

  describe("User has not entered a username", () => {
    beforeEach(() => {
      wrapper = factory(handle, messages)
    });

    it("has a list of messages", () => {
      expect(wrapper.contains("#messages")).toBe(true);
    });

    it("has a input for the users name", () => {
      expect(wrapper.contains("#name-input")).toBe(true);
    });

    it("does not allow the user to send messages", () => {
      expect(wrapper.contains("#comment-input")).toBe(false);
    });
  });

  describe("User has entered a username", () => {
    beforeEach(()  => {
      handle = "baphled"

      wrapper = factory(handle, messages)
    });

    it("has a input for the users name", () => {
      expect(wrapper.contains("#name-input")).toBe(false);
    });

    it("does not allow the user to send messages", () => {
      expect(wrapper.contains("#comment-input")).toBe(true);
    });
  });
});
