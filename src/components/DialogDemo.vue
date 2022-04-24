<template>
  <h2>Dialog示例</h2>
  <Button @click="toggle">点击弹出对话</Button>
  <Dialog v-model:visible="x"></Dialog>
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
    return {x, toggle}
  }
}
</script>