<template>
  <img src="{{src}}" />
</template>
<script>
export default {
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
    load() {},
  },
};
</script>
<style scoped>
</style>