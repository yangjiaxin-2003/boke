<template>
  <div class="child">
    <!-- 模板中使用时，this不能省 -->
    <div>子组件：{{ this.parentName() }}</div>
    <button @click="show">展示响应数据</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  inject: ["parentName"],
  data() {
    return {};
  },
  methods: {
    show() {
      console.log(this.parentName());
    },
  },
};
</script>
