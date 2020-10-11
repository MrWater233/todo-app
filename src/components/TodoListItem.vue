<template>
  <div class="todo-item">
    <label>
      <input type="checkbox"/>
      TODO 1
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
    name: "TodoListItem"
};
</script>

<style>
.todo-list .todo-item {
  background-color: #fff;
  padding: 16px;
  border-radius: 24px;
  color: #626262;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}

.todo-item span.check-button {
  position: absolute;
  top: 0;
}

.todo-item span.check-button::before,
.todo-item span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item span.check-button::before {
  border: 1px solid #b382f9;
}

.todo-item span.check-button::after {
  transition: 0.4s;
  background-color: #b382f9;
  transform: translate(1px,1px) scale(0.8);
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
</style>