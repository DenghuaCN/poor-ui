<template>
  <div>
    <h1>按钮</h1>
    <p class="desc">按钮传达用户可以采取的行动。它们通常放置在整个UI中，例如:</p>

    <li>对话框</li>
    <li>模态窗口</li>
    <li>表单</li>
    <li>卡片</li>
    <li>工具栏</li>

    <Demo :component="ButtonBase" />
    <Demo :component="ButtonSize" />
    <Demo :component="ButtonDanger" />
    <Demo :component="ButtonDisabled" />
    <Demo :component="ButtonLoading" />
  </div>
</template>

<script lang="ts" setup>
import Demo from "../Demo.vue";
import ButtonBase from "./ButtonBase.demo.vue";
import ButtonSize from "./ButtonSize.demo.vue";
import ButtonDanger from "./ButtonDanger.demo.vue";
import ButtonDisabled from "./ButtonDisabled.demo.vue";
import ButtonLoading from "./ButtonLoading.demo.vue";
</script>

<style lang="scss" scoped>
.desc {
  margin-bottom: 10px;
}
</style>
