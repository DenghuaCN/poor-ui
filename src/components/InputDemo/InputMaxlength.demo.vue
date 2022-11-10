<demo>
  输入长度限制
</demo>

<template>
  <Input
    v-model:value="value"
    placeholder="limit 5 characters"
    :maxlength="5"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');
</script>
