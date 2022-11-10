<template>
  <h1>输入框</h1>
  <p class="desc">通过鼠标或键盘输入内容，是最基础的表单域的包装</p>

  <Demo :component="InputBase" />
  <Demo :component="InputClearable" />
  <Demo :component="InputDisabled" />
  <Demo :component="InputMaxLength" />
  <Demo :component="InputSize" />
  <Demo :component="InputEvent" />
</template>

<script lang="ts" setup>
import InputBase from './InputBase.demo.vue'
import InputClearable from './InputClearable.demo.vue';
import InputDisabled from './InputDisabled.demo.vue';
import InputMaxLength from './InputMaxlength.demo.vue';
import InputSize from './InputSize.demo.vue';
import InputEvent from './InputEvent.demo.vue'
import Demo from "../Demo.vue";
</script>

<style lang="scss" scoped>

</style>
