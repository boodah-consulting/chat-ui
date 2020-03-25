<template>
  <div id="messages" class="h-full box-border rounded bg-white text-left text-black">
    <ul 
      class="p-2"
      >
      <li
        v-for="(message, index) in messages"
        :key="`${message}-${index}`"
        :index="index"
        >
        <span class="handle">
          {{ message.handle }}:
        </span>
        <span class="message">
          {{ message.message }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Messages",
  computed: {
    ...mapGetters("messenger", ["messages"])

  }
};
</script>
