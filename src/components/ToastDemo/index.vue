<template>
  <div>
    <h1>Toast 全局提示</h1>
    <p class="desc">全局展示操作反馈信息</p>

    <li>可提供成功、警告和错误等反馈信息</li>
    <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式</li>

    <Demo :component="ToastBase" />
    <Demo :component="ToastType" />
    <Demo :component="ToastCenter" />
    <Demo :component="ToastDelay" />
  </div>
</template>

<script lang="ts" setup>
import Demo from "../Demo.vue";
import ToastBase from "./ToastBase.demo.vue";
import ToastType from "./ToastType.demo.vue";
import ToastCenter from "./ToastCenter.demo.vue";
import ToastDelay from "./ToastDelay.demo.vue";
</script>

<style lang="scss" scoped>
  .desc {
    margin-bottom: 10px;
  }
</style>
