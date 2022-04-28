<demo>普通应用</demo>

<template>
  <Button @click="toggle">点击弹出对话</Button>
  <Dialog v-model:visible="dialogVisible" :close-on-click-overlay="false" :confirm="confirmFn" :cancel="cancelFn">
    <template v-slot:content>
      hello
      <p>world</p>
    </template>
    <template v-slot:title>
      对话框
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from "../../lib/Button.vue";
import {ref} from "vue";
export default {
  components:{
    Dialog,
    Button
  },
  setup(){
    const dialogVisible = ref(false)
    const toggle = () =>{
      dialogVisible.value = !dialogVisible.value
    }
    const confirmFn = () =>{return true}
    const cancelFn = () =>{}
    return { dialogVisible, toggle,confirmFn ,cancelFn }
  }
}
</script>