<template>
  <div>
    <h1>App组件</h1>
    <Pager :current="current" :total="total" @pageChange="handlePagechange" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar"; //导入所需组件
import Pager from "./components/Pager";

//因为App.js也是给个组件会被使用，故也需要导出，类似一个模块
export default {
  name: "App", //如果组件没有在注册的时候制定名字，则使用该名字
  data() {
    return {
      current: 6,
      total: 101,
      text: "123", // 文本输入框
      t: 100,
    };
  },
  components: {
    Avatar, //局部注册子组件
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
/* 父组件对子组件的根元素样式，可以产生影响 */
/* .icon-container{
    font-size: 50px;
    color: black;
  } */
</style>
