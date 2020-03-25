// Message Model
import { Model } from "vue-mc";

export default class Event extends Model {
  defaults() {
    return {
      handle: "",
      message: ""
    };
  }

  mutations() {
    return {
      id: id => Number(id) || null,
      handle: String,
      messenge: String,
      updated_at: Date,
      created_at: Date
    };
  }

  routes() {
    return {
      create: "/api/messages.json",
    };
  }

  createRequest(config) {
    config.baseURL = process.env.VUE_APP_API_URL;

    return super.createRequest(config);
  }
}
