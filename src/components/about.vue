<template>
  <div id="about">
    这个是about页
  </div>
</template>
<script>
export default {
    data() {
      return {}
    },
    created() {
      console.log("这个冲突是我故意造成的,created是vue生命周期里的一个钩子函数，在vue对象生成之后会触发");
      console.log("这个冲突是我故意造成的");
      console.log("这个冲突是我故意造成的,这个是分支");
    },
    methods: {
      query() {
        console.log("这个冲突是我故意造成的");
        console.log("这个冲突是我故意造成的,我习惯性写这个方法，进入页面会请求后台数据，或者是表单，或者是列表")
      }
    }
  }
</script>
<style scoped>
</style>