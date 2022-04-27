<demo>快捷使用</demo>

<template>
  <Button @click="showDialog">show dialog</Button>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from "../../lib/Button.vue";
import openDialog from "../../lib/openDialog";
import {h} from "vue";

export default {
  components:{ Button, Dialog },
  setup(){
    const showDialog = () =>{
      openDialog({
        title:h('p',{},'标题'),
        content:'你好',
        confirm(){console.log('ok')},
        cancel(){
          console.log('cancel');}
      })
    }
    return { showDialog }
  }
}
</script>