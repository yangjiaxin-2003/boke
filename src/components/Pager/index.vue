<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }">
      |&lt;&lt;
    </a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">
      &lt;&lt;
    </a>
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
    >
      {{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;
    </a>
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
    >
      &gt;&gt;|
    </a>
  </div>
</template>
<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容数
    limit: {
      type: Number,
      default: 10,
    },
    //可视页码
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //最大页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    //可视最小页码
    visibleMin() {
      let minNumber = this.current - Math.floor(this.visibleNumber / 2);
      if (minNumber < 1) {
        minNumber = 1;
      }
      return minNumber;
    },
    //可视最大页码
    visibleMax() {
      let maxNumber = this.visibleMin + this.visibleNumber - 1;
      if (maxNumber > this.pageNumber) {
        maxNumber = this.pageNumber;
      }
      return maxNumber;
    },
    //页码数组
    numbers() {
      let arr = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    //触发事件
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      //抛出一个事件/触发事件
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
