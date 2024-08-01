<template>
  <div>
    <h1>App组件</h1>
    <Pager
      :current="current"
      :total="total"
      @pageChange="handlePagechange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";

//因为App.js也是给个组件会被使用，故也需要导出，类似一个模块
export default {
  name: "App", //如果组件没有在注册的时候制定名字，则使用该名字
  data() {
    return {
      current: 6,
      total: 101,
    };
  },
  components: {
    Pager,
  },
  methods: {
    handlePagechange(newPage) {
      this.current = newPage;
    },
  },
};
</script>
<style scoped>
</style>
