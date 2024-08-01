<template>
  <div>
    <h1>App组件</h1>
    <Avatar url="http://mdrs.yuanjin.tech/img/20201031141350.jpg" :size="300" />
  </div>
</template>

<script>
import Avatar from "./"; //导入所需组件

export default {
  components: {
    Avatar,
  },
};
</script>
<style scoped>
</style>
