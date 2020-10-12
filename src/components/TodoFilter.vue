<template>
  <ul class="filters">
    <li
      v-for="filter in filters"
      :key="filter.value"
      class="filter"
      :class="{ active: selected == filter.value }"
      @click="$emit('change-filter', filter.value)"
    >
      {{ filter.label }}
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TodoFilter",
  props: ["selected"],
  setup() {
    const filters = ref([
      { label: "全部", value: "all" },
      { label: "未完成", value: "todo" },
      { label: "已完成", value: "done" },
    ]);
    return { filters };
  },
};
</script>

<style>
.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;

  cursor: pointer;
}

.filters .filter.active {
  color: #42ea80;
  transform: scale(1.2);
}
</style>