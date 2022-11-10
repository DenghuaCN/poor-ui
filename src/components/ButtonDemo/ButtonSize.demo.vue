<demo>
支持 size
</demo>

<template>
  <div class="wrap">
    <div class="box">
      <Button size="big">Big</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
    </div>
    <div class="box">
      <Button theme="primary" size="big">Big</Button>
      <Button theme="primary">Normal</Button>
      <Button size="small" theme="primary">Small</Button>
    </div>
    <div class="box">
      <Button size="big" theme="text">Big</Button>
      <Button theme="text">Normal</Button>
      <Button size="small" theme="text">Small</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "poor-ui";
</script>

<style lang="scss" scoped>
.wrap {
  .box {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .gulu-button {
    margin-right: 8px;
  }
}
</style>
