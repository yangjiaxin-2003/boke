<template>
  <div class="parent">
    <div>父组件：{{ this.name }}</div>
    <button @click="changeIdol">改变偶像</button>
    <hr />
    <child></child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  name: "Parent",
  components: {
    Child,
  },
  provide() {
    return {
      parentName: () => this.name,
    };
  },
  data() {
    return {
      name: "小松菜奈",
    };
  },
  methods: {
    changeIdol() {
      this.name = "新垣结衣";
    },
  },
};
</script>
