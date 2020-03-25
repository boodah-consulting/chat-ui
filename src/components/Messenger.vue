<template>
  <section id="messenger" class="m-auto flex flex-wrap items-stretch m-auto h-screen">
    <div class="h-full m-auto">
      <Messages />
      <CommentInput />
    </div>
  </section>
</template>

<script>
import Messages from "@/components/Messages";
import CommentInput from "@/components/CommentInput";

export default {
  name: "Messenger",
  components: {
    Messages,
    CommentInput
  }
};
</script>
