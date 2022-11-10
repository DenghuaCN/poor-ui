<demo>
加载中状态
</demo>

<template>
  <div>
    <Button loading>Primary Button</Button>
    <Button theme="primary" loading>Primary Button</Button>
    <Button danger loading>Primary Button</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "poor-ui";
</script>

<style lang="scss" scoped>
div {
  .gulu-button {
    margin-right: 8px;
  }
}
</style>
