<demo>
  clearable
</demo>

<template>
  <Input
    v-model:value="value"
    placeholder="clearable"
    @clear="clearHandle"
    clearable
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');

const clearHandle = () => {
  console.log('input value is clean');
}

</script>
