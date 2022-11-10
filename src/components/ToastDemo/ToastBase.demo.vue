<demo>
  基本使用
</demo>

<template>
  <Button @click="openToastHandle">这是一个Toast，3秒后消失</Button>
</template>

<script lang="ts" setup>
  import { ToastVM, Button } from "poor-ui";

  const openToastHandle = () => {
    ToastVM({
      title: 'hello, Toast',
      type: 'normal'
    })
  }

</script>