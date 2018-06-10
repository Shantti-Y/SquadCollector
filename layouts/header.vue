<template>
    <el-menu
      class="header"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item
        @click="onClickHandle"
        index="1"
      ><i class="fa fa-bars" /></el-menu-item>
    </el-menu>
</template>


<script>
  export default {
    methods: {
      onClickHandle(){
        this.$emit('header-clicked')
      }
    }
  }
</script>
<style scoped>
</style>
