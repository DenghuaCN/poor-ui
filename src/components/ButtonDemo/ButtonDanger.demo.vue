<demo>
  危险按钮
</demo>

<template>
  <div>
    <div>
      <Button danger>Default button</Button>
      <Button theme="text" danger>Text button</Button>
    </div>
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
