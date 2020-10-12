<template>
  <div class="main">
    <div class="container">
      <h1>TODO-APP</h1>

      <todo-add />
      <todo-filter :selected="filterStatus" @change-filter="filterStatus = $event" />
      <todo-list :todos="filteredTodos" />
      
    </div>
  </div>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import todoTools from "./common/todoTools";
import { onMounted, ref, computed } from "vue";

export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    // 所有的todos
    const todos = ref([]);
    // 当前filter的状态
    const filterStatus = ref("all");
    // 过滤完成的Todo列表
    const filteredTodos = computed(() => {
      switch (filterStatus.value) {
        case "done":
          return todos.value.filter((todo) => todo.completed);
        case "todo":
          return todos.value.filter((todo) => !todo.completed);
        default:
          return todos.value;
      }
    });

    // 获取todos
    const { fetchTodos } = todoTools();
    // 增加Todo
    const addTodo = (todo) => todos.value.push(todo);

    // 渲染时从远端获取数据
    onMounted(() => {
      fetchTodos(todos);
    });

    return {
      todos,
      filterStatus,
      filteredTodos,
      addTodo
    };
  },
};
</script>

<style>
/* 全局初始化 */
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 页面 */
.main {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(200, 248, 129);
}

/* Todo-App容器 */
.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
  cursor: default;
  text-align: center;
}
</style>
