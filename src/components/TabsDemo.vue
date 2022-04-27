<template>
  <div>Tabs 示例</div>
  <Content :component="TabItem" />
</template>

<script lang="ts">
import Content from './Content.vue'
import TabItem from './TabItems/TabItem.vue'

export default {
  components:{Content},
  setup(){
    return {TabItem}
  }
}


</script>