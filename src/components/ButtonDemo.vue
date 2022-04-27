<template>
  <div>
    <Content :component="Item1" />
    <Content :component="Item2" />
    <Content :component="Item3" />
    <Content :component="Item4" />
    <Content :component="Item5" />
  </div>
</template>

<script lang="ts">
import Content from './Content.vue'
import Item1 from './ButtonItems/Item1.vue'
import Item2 from './ButtonItems/Item2.vue'
import Item3 from './ButtonItems/Item3.vue'
import Item4 from './ButtonItems/Item4.vue'
import Item5 from './ButtonItems/Item5.vue'
export default {
  components:{ Content },
  setup(){
    return { Item1, Item2, Item3, Item4, Item5 }
  }
}
</script>