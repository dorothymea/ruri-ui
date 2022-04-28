<template>
  <div class="content">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="content-component">
      <component :is="component"/>
    </div>
    <div class="content-action">
      <Button @click="showCode" v-if="!codeVisible">查看代码</Button>
      <Button @click="hideCode" v-else>隐藏代码</Button>
    </div>
    <div class="content-code" v-if="codeVisible">
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism.css'
import {computed, ref} from "vue";
const Prism = (window as any).Prism
export default {
  components:{Button},
  props:{
    component: Object
  },
  setup(props){
    const html = computed(()=>{
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const codeVisible = ref(false)
    const showCode = () => {codeVisible.value = true}
    const hideCode = () => {codeVisible.value = false}
    return { Prism, codeVisible, showCode, hideCode,  html }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.content {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-action {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 4px 4px;
    border-top: 1px dashed $border-color;
    overflow: auto;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>