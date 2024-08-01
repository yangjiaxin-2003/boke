<template>
  <div>
    <Icon type="info"/>
  </div>
</template>

<script>
import Icon from "./"; //导入所需组件

//因为App.js也是给个组件会被使用，故也需要导出，类似一个模块
export default {
  components: {
    Icon,
  },
};
</script>
<style scoped>
/* 父组件对子组件的根元素样式，可以产生影响 */
.icon-container {
  font-size: 150px;
  color: black;
}
</style>
