<template>
  <h1>Tabs</h1>
  <p class="desc">提供平级的区域将大块内容进行收纳和展现</p>

  <li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li>
  <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li>

  <Demo :component="TabsBase" />
  <Demo :component="TabsDisabled" />
  <Demo :component="TabsEvent" />
</template>

<script lang="ts" setup>
import Demo from '../Demo.vue';
import TabsBase from './TabsBase.demo.vue';
import TabsDisabled from './TabsDisabled.demo.vue';
import TabsEvent from './TabsEvent.demo.vue';
</script>

<style lang="scss" scoped>
.desc {
  margin-bottom: 10px;
}
</style>