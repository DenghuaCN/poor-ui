<template>
  <h1>Container</h1>
  <p class="desc">用于布局的容器组件，方便快速搭建页面的基本结构</p>

  <Demo :component="ContainerBase" />
</template>

<script lang="ts" setup>
import ContainerBase from './ContainerBase.demo.vue';
import Demo from '../Demo.vue';

</script>

<style lang="scss" scoped>
  .desc {
    margin-bottom: 10px;
  }
</style>
