<template>
  <section
    id="messenger"
      class="flex items-stretch h-screen"
    >
    <div
      id="chat-ui"
      class="flex-1 self-center justify-center max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto"
      >
      <Messages />
      <NameInput v-if="!name"/>
      <CommentInput v-if="name" />
    </div>
  </section>
</template>

<script>
import Messages from "@/components/Messages";
import CommentInput from "@/components/CommentInput";
import NameInput from "@/components/NameInput";

export default {
  name: "Messenger",
  components: {
    Messages,
    NameInput,
    CommentInput
  },
  data () {
    return {
      name: null
    }
  }
};
</script>

<style>
#chat-ui {
  height: 80%
}
</style>
