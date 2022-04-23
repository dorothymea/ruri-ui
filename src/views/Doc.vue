<template>
  <div>
    <TopNav/>
    doc页面
    <div class="topNav">
      <div class="logo"></div>
      <div class="menu"></div>
    </div>
    <div class="container">
      <aside>边栏</aside>
      <main>主要内容</main>
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