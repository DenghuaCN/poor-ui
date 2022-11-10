<demo>
  文字居中
</demo>

<template>
    <Button @click="openToastHandle">打开Toast</Button>
</template>

<script lang="ts" setup>
  import { ToastVM, Button } from "poor-ui";

  const openToastHandle = () => {
    ToastVM({
      title: '这是一段居中的文字',
      center: true,
    })
  }

</script>
