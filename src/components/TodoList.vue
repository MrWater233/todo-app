<template>
  <div class="todo-list">
      <todo-list-item v-for="item in 3" :key="item"/>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem"

export default {
    name: "TodoList",
    components: {
        TodoListItem
    },
    props: ["todos"]
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>