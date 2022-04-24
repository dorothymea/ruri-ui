<template>
  <h2>Dialog示例</h2>
  <Button @click="toggle">点击弹出对话</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="false" :confirm="f1" :cancel="f2">
    <template v-slot:content>
      <strong>hello</strong>
      <p>world</p>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from "../lib/Button.vue";
import {ref} from "vue";

export default {
  components:{
    Dialog,
    Button
  },
  setup(){
    const x = ref(false)
    const toggle = () =>{
      x.value = !x.value
    }
    const f1 = () =>{return true}
    const f2 = () =>{}
    return {x, toggle,f1,f2}
  }
}
</script>