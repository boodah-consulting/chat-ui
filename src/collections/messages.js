import { Collection } from "vue-mc";

import Message from "@/models/message";

export default class Messages extends Collection {
  model() {
    return Message;
  }

  routes() {
    return {
      fetch: "/api/messages.json"
    };
  }

  createRequest(config) {
    config.baseURL = process.env.VUE_APP_API_URL;

    return super.createRequest(config);
  }
}
