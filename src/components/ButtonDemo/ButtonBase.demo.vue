<demo>
  基本使用
</demo>

<template>
  <div>
    <Button>Default Button</Button>
    <Button theme="primary">Primary Button</Button>
    <Button theme="link">Link Button</Button>
    <Button theme="text">Text Button</Button>
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
