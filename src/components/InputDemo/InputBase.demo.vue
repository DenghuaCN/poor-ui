<demo>
  基本使用
</demo>

<template>
  <Input v-model:value="value"  placeholder="please input something" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');
</script>
