<demo>
  基本使用
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts" setup>
import { Switch } from "poor-ui";
import { ref } from "vue";

const bool = ref(false);
</script>
