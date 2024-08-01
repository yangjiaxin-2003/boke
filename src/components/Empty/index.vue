<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>
<script>
import Icon from "../Icon/index.vue";
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
      require: false,
    },
  },
  components: {
    Icon,
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.icon-container {
  font-size: 150px;
}
.empty-container {
  .self-center(absolute);
  color: @gray;
  text-align: center;
}
</style>