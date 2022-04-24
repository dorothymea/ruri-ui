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
  <Button @click="showDialog">show dialog</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from "../lib/Button.vue";
import {ref, h} from "vue";
import openDialog from '../lib/openDialog.ts'
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
    const showDialog = () =>{
      openDialog({
        title:h('strong',{},'标题'),
        content:'你好',
        confirm(){console.log('ok')},
        cancel(){
          console.log('cancel');}

      })
    }
    return {x, toggle,f1,f2,showDialog}
  }
}
</script>