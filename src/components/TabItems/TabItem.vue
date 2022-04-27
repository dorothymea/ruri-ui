<demo>常规使用</demo>

<template>
<div>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航3">内容3</Tab>
  </Tabs>
</div>
</template>

<script lang="ts">
import Tab from '../../lib/Tab.vue'
import Tabs from '../../lib/Tabs.vue'
import {ref} from "vue";
export default {
  components:{
    Tab,Tabs
  },
  setup(){
    const selected = ref('导航1')
    return {selected}
  }
}
</script>