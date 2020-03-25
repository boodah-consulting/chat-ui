<template>
  <div id="comment" class="w-full p-4">
    <input class="w-3/4 m-3 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value="Enter comment here">
    <button class="w-32 m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Submit
    </button>
  </div>
</template>

<script>

export default {
  name: "CommentInput"
};
</script>

