<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./"; //导入所需组件

export default {
  components: {
    Empty,
  },
};
</script>
<style scoped>
.test-container {
  margin: 0 auto;
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>
