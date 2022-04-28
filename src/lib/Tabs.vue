<template>
  <div class="ruri-tabs">
    <div class="ruri-tabs-nav" ref="container">
      <div class="ruri-tabs-nav-item" v-for="(t,index) in titles" :key="index" @click="select(t)" :class="{selected:t===selected}" :ref="el=> {if(t === selected) selectedItem= el}">
        {{t}}
      </div>
      <div class="ruri-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ruri-tabs-content">
      <component class="ruri-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import {computed, onMounted, ref, watchEffect} from "vue";

export default {
  props:{
    selected:{type:String}
  },
  setup(props,context){
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(()=>{
      watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 10 + 'px'
        const {left:left1} = container.value.getBoundingClientRect()
        const {left:left2} = selectedItem.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left - 5 + 'px'
      },{
        flush: 'post'
      })
    })

    const defaults = context.slots.default()
    defaults.forEach((tag) => {
      if(tag.type !== Tab){ throw new Error('Tabs的字标签必须是Tab')}
    })
    const titles = defaults.map((tag) =>{return tag.props.title})
    const current = computed(()=>{
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const select = (title:String) =>{
      context.emit('update:selected',title)
    }
    return { defaults, titles ,current ,select , selectedItem, indicator,container}
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ruri-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>