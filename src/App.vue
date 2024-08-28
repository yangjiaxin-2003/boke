<template>
  <div>
    <div class="test-container">
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        :duration="3000"
        @load="handleLoadImage"
      />
    </div>
  </div>
</template>

<script>
import Avatar from "./components/Avatar"; //导入所需组件
import Pager from "./components/Pager";
import Empty from "./components/Empty";
import ImageLoader from "@/components/ImageLoader";

//因为App.js也是给个组件会被使用，故也需要导出，类似一个模块
export default {
  name: "App", //如果组件没有在注册的时候制定名字，则使用该名字
  data() {
    return {
      current: 16,
      total: 101,
      text: "123", // 文本输入框
      t: 100,
    };
  },
  components: {
    Avatar, //局部注册子组件
    Pager,
    Empty,
    ImageLoader,
  },
  methods: {
    handlePagechange(newPage) {
      this.current = newPage;
    },
    handleLoadImage() {
      console.log("图片已加载完成");
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

.test-container {
  width: 500px;
  height: 500px;
  outline: 2px solid black;
}
</style>
