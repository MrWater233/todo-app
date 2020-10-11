<template>
  <div class="main">
    <div class="container">
      <h1>TODO-APP</h1>

      <todo-add/>
      <todo-filter @change-filter="filterStatus = $event"/>
      <todo-list :todos="filteredTodos"/>
      
    </div>
  </div>
</template>

<script>
import TodoAdd from './components/TodoAdd';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import todoTools from './common/todoTools';
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList
  },
  setup() {
    const {todos,filterStatus,filteredTodos,fetchTodos,addTodo} = todoTools();

    onMounted(() => {
        fetchTodos()
    });

    return {
      todos,
      filterStatus,
      filteredTodos,
      addTodo
    }
  }
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
  background-color: rgb(245,246,252);
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
