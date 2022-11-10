<template>
    <h1>开关</h1>
    <p class="desc">开关打开或关闭单个项目的状态</p>

    <li>在移动设备和平板电脑上打开或关闭单个项目</li>
    <li>立即激活或停用某物</li>

    <Demo :component="SwitchBase" />
    <Demo :component="SwitchDisabled" />
    <Demo :component="SwitchIcon" />
    <Demo :component="SwitchLoading" />
</template>

<script lang="ts" setup>
import SwitchBase from "./SwitchBase.demo.vue";
import SwitchDisabled from "./SwitchDisabled.demo.vue";
import SwitchIcon from "./SwitchIcon.demo.vue";
import SwitchLoading from "./SwitchLoading.demo.vue";
import Demo from "../Demo.vue";
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.desc {
  margin-bottom: 10px;
}

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
