<template>
  <h1>Layout 布局</h1>
  <p class="desc">通过基础的 24 分栏，迅速简便地创建布局</p>

  <Demo :component="LayoutBase"></Demo>
  <Demo :component="LayoutGap"></Demo>
  <Demo :component="LayoutHybrid"></Demo>
  <Demo :component="LayoutOffset"></Demo>
  <Demo :component="LayoutAlign"></Demo>
  <Demo :component="LayoutResponse"></Demo>
</template>

<script lang="ts" setup>
import Demo from "../Demo.vue";
import LayoutBase from './LayoutBase.demo.vue';
import LayoutGap from './LayoutGap.demo.vue';
import LayoutHybrid from './LayoutHybrid.demo.vue';
import LayoutOffset from './LayoutOffset.demo.vue';
import LayoutAlign from './LayoutAlign.demo.vue';
import LayoutResponse from "./LayoutResponse.demo.vue";
</script>

<style lang="scss" scoped>
  .desc {
    margin-bottom: 10px;
  }
</style>