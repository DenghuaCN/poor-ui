<demo>
  其他提示类型
</demo>

<template>
  <Button @click="openToastHandle('normal')">normal</Button>
  <Button @click="openToastHandle('secondary')">secondary</Button>
  <Button @click="openToastHandle('success')">success</Button>
  <Button @click="openToastHandle('warning')">warning</Button>
  <Button @click="openToastHandle('error')">error</Button>
</template>

<script lang="ts" setup>
  import { ToastVM, Button } from "poor-ui";

  const openToastHandle = (type) => {
    ToastVM({
      title: type,
      type,
    })
  }

</script>

<style lang="scss" scoped>
  .gulu-button {
    margin-right: 10px;
  }
</style>
