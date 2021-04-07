<template>
  <div>
    <h1>{{title}}</h1>
    <h1 v-if="isDone == true">This is done</h1>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    title: String,
    isDone: Boolean
  }
};
</script>

<style scoped>
</style>