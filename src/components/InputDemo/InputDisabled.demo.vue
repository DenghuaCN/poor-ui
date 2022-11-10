<demo>
  支持disabled
</demo>

<template>
  <Input v-model:value="value" disabled />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('disabled');
</script>
