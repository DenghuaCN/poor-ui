<demo>
  clearable
</demo>

<template>
  <Input
    v-model:value="value"
    placeholder="clearable"
    clearable
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');
</script>
