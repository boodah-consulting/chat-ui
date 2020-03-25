<template>
  <div class="home">
    <Messenger />
  </div>
</template>

<script>
// @ is an alias to /src
import Messenger from "@/components/Messenger.vue";

export default {
  name: "Home",
  components: {
    Messenger
  }
};
</script>
