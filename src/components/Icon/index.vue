<template>
  <i class="iconfont icon-container" :class="iconClass"></i>
</template>
<script>
/* 映射 */
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export default {
  props: {
    type: {
      type: String,
      require: true,
    },
  },
  computed: {
    iconClass() {
      return classMap[this.type]; //注意一定要用this
    },
  },
};
</script>
<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.icon-container {
  font-size: inherit;
  color: inherit;
}
</style>