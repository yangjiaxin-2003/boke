<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>
<script>
export default {
  name: "Avatar",
  //属性
  props: {
    url: {
      type: String,
      required: true, //要求必须传入url
    },
    size: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style scoped>
/* 具有作用域的样式 */
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
