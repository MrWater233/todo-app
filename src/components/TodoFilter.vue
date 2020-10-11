<template>
  <ul class="filters">
    <li class="filter active">全部</li>
    <li class="filter">已完成</li>
    <li class="filter">未完成</li>
  </ul>
</template>

<script>
export default {
    name: 'TodoFilter'
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
  color: #6b729c;
  transform: scale(1.2);
}
</style>