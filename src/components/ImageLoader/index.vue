<template>
  <div class="image-loader-container">
    <!-- 占位图片 -->
    <img v-if="isLoading" :src="placeholder" alt="" />
    <!-- 原始图片 -->
    <img
      :src="src"
      :style="{ opacity: isLoaded, transition: `${duration}ms` }"
      @load="handleLoad"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      isLoadingSuccess: false,
    };
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: false,
      default: 500,
    },
  },
  methods: {
    // 注册事件，用于告诉父组件，图片已经完成，后续操作交给父组件
    handleLoad() {
      this.isLoadingSuccess = true; //加载完成
      setTimeout(() => {
        this.$emit("load");
        this.isLoading = false; //等原图渲染完了后再消失
      }, this.duration);
    },
  },
  computed: {
    isLoaded() {
      return this.isLoadingSuccess ? 1 : 0;
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill(); // 子绝父相，占满整个父容器
    object-fit: cover; // 保持宽高比的同时，填充容器
  }
  .placeholder {
    filter: blur(2vw); //设置占位图的模糊度
  }
}
</style>