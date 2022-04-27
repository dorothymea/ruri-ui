<template>
  <h2>Dialog示例</h2>
  <Content :component="Dialog1" />
  <Content :component="Dialog2" />

</template>

<script lang="ts">
import Content from './Content.vue'
import Dialog1 from './DialogItems/Dialog1.vue'
import Dialog2 from './DialogItems/Dialog2.vue'

export default {
  components:{
    Content
  },
  setup(){
    return {Dialog1,Dialog2}
  }
}
</script>