<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item"
        v-for="(title, index) in titles"
        :key="index"
        @click="selectHandle(title)"
        :class="[{ selected: title === selected }, {'gulu-tabs-nav-item-disabled': isHaveDisabled(title)}]"
        :ref="(el) => setSelectedItem((el as HTMLDivElement), title)">

        {{ title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts" setup="props, context">
import type { Component } from 'vue';
import Tab from './Tab.vue';
import {
  computed,
  ref,
  watchEffect,
  onMounted,
  useSlots
} from 'vue';

const props = defineProps({
  selected: {
    type: String,
  }
});

const emit = defineEmits<{
  (e: 'update:selected', title: string): void;
}>();

const selectedItem = ref<HTMLDivElement>(null)
const indicator = ref<HTMLDivElement>(null)
const container = ref<HTMLDivElement>(null)

onMounted(() => {
  watchEffect(() => {
    const { width } = selectedItem.value.getBoundingClientRect()
    indicator.value.style.width = width + 'px'

    const { left: left1 } = container.value.getBoundingClientRect()
    const { left: left2} = selectedItem.value.getBoundingClientRect()
    const left = left2 - left1
    indicator.value.style.left = left + 'px'

  }, {
    flush: 'post'
  })
})

const slots = useSlots();
const defaults = slots.default()

defaults.forEach((tag) => {
  if ((tag.type as Component).name !== Tab.name) {
    throw new Error('Tabs 子标签必须是 Tab')
  }
})

const setSelectedItem = (el:HTMLDivElement, t: string) => {
  if (t === props.selected) {
    selectedItem.value = el
  }
}
const current = computed(() => {
  return defaults.find(tag => tag.props.title === props.selected)
})


const isHaveDisabled = (title) => {
  let target = defaults.filter((VNode) => {
    return VNode.props.title === title;
  })[0]

  if (target.props && 'disabled' in target.props && target.props.title === title) {
    return true;
  }
  return false;
};

const titles = defaults.map((tag) => {
  return tag.props.title
})
const selectHandle = (title: string) => {
  if (isHaveDisabled(title)) {
    return false;
  }
  emit('update:selected', title)
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
$disabled-color: #00000040;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &-disabled {
        cursor: not-allowed;
        color: $disabled-color;
      }

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
