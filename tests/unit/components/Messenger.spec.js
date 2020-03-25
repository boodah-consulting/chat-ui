import { mount } from "@vue/test-utils";
import Messenger from "@/components/Messenger.vue";

describe("Messenger.vue", () => {
  describe("User has not entered a username", () => {
    it("has a list of messages", () => {
      const wrapper = mount(Messenger);

      expect(wrapper.contains("#messages")).toBe(true);
    });

    it("has a input for the users name", () => {
      const wrapper = mount(Messenger);

      expect(wrapper.contains("#name-input")).toBe(true);
    });

    it("does not allow the user to send messages", () => {
      const wrapper = mount(Messenger);

      expect(wrapper.contains("#comment-input")).toBe(false);
    });
  });

  describe("User has entered a username", () => {
    let wrapper

    beforeEach(()  => {
      wrapper = mount(Messenger)
      wrapper.setData({ name: "baphled" })
    });

    it("has a input for the users name", () => {
      expect(wrapper.contains("#name-input")).toBe(false);
    });

    it("does not allow the user to send messages", () => {
      expect(wrapper.contains("#comment-input")).toBe(true);
    });
  });
});
