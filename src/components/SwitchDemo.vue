<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <div class="demo">
      <h2>普通Switch</h2>
      <div class="demo-component">
        <component :is="Item1"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{Item1.__sourceCode}}</pre>
      </div>
  </div>
    <div class="demo">
      <h2>禁用Switch</h2>
      <div class="demo-component">
        <component :is="Item2"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>{{Item2.__sourceCode}}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import Button from '../lib/Button.vue'
import Item1 from './SwitchItems/item1.vue'
import Item2 from './SwitchItems/item2.vue'
import {ref} from "vue";
export default {
  components:{ Switch, Button, Item1, Item2},
  setup(){
    const bool = ref(false)
    return {bool,Item1,Item2}
  }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
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

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>