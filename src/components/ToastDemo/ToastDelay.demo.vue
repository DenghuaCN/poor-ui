<demo>
  可关闭与延时关闭
</demo>

<template>
    <Button @click="openToastHandle">打开一个可关闭的Toast</Button>
    <Button @click="openDelayHandle">延迟5s后关闭</Button>
</template>

<script lang="ts" setup>
  import { ToastVM, Button } from "poor-ui";

  const openToastHandle = () => {
    ToastVM({
      title: '这是一个可关闭的Toast',
      isShowClose: true
    })
  }

  const openDelayHandle = () => {
    ToastVM({
      title: '延时5秒后关闭',
      delay: 5000,
    })
  }

</script>

<style lang="scss" scoped>
  .gulu-button {
    margin-right: 5px;
  }
</style>
