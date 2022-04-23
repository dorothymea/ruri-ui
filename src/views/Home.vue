<template>
  <div>
    Home页面
    <TopNav/>
    <div class="banner">
      <h1>轮子UI</h1>
      <h2>一个UI框架</h2>
      <p class="action">
        <a href="">github</a>
        <a href="">start</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components:{
    TopNav
  }
}
</script>

<style lang="scss" scoped>

</style>