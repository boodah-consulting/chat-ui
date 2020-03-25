<template>
  <div id="name-input" class="w-full p-4">
    <form
      v-on:submit.prevent="onSubmit"
      >
      <input
        class="w-3/4 m-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="form.handle"
        placeholder="Enter name here"
        >
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NameInput",
  data () {
    return {
      form: {
        handle: null
      }
    }
  },
  computed: {
    ...mapGetters("messenger", ["handle"])
  },
  methods: {
    ...mapActions("messenger", ["addHandle"]),
    onSubmit() {
      this.addHandle(this.form.handle)
    }
  }
};
</script>
