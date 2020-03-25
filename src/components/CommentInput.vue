<template>
  <div id="comment-input" class="w-full p-4">
    <form
      v-on:submit.prevent="onSubmit"
      >
      <input
        class="w-3/4 m-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="form.message"
        type="text"
        value="Enter comment here"
        >
        <button
          class="w-20 m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          >
          Submit
        </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CommentInput",
  data () {
    return {
      form: {
        message: null
      }
    }
  },
  computed: {
    ...mapGetters("messenger", ["handle"])
  },
  methods: {
    ...mapActions("messenger", ["addMessage"]),
    onSubmit() {
      let params = {
        handle: this.handle,
        message: this.form.message
      }
      this.addMessage(params)
      this.form.message = ''
    }
  }
};
</script>

