<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Content :component="Item1"/>
    <Content :component="Item2"/>
  </div>
</template>

<script lang="ts">
import Item1 from './SwitchItems/item1.vue'
import Item2 from './SwitchItems/item2.vue'
import Content from './Content.vue'

export default {
  components:{ Content},
  setup(){
    return { Item1, Item2 }
  }
}
</script>
