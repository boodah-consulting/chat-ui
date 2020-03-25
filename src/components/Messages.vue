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
        <span class="user">
          {{ message.user }}:
        </span>
        <span class="message">
          {{ message.message }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data () {
    return {
      messages: [ 
        {
          user: 'baphled',
          message: 'Some cool message',
        },
        {
          user: 'baphled',
          message: 'Hmm, this is kinda interesting',
        },
        {
          user: 'baphled',
          message: 'This could work, but lets see how it goes :thinking:',
        },
        {
          user: 'baphled',
          message: 'This is some really long message that should just follow nicely regardless of how lengthy it is. I wonder if this would be ideal for when people write monologs :thinking:',
        },
      ]
    }
  }
};
</script>
