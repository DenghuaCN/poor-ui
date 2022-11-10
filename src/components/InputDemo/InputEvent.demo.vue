<demo>
  Input events
</demo>

<template>
  <Input
    v-model:value="value"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');

const handleInput = (value: string) => {
  console.log('input event', value);
};
const handleChange = (value: string) => {
  console.log('change event', value);
};
const handleBlur = (event: FocusEvent) => {
  console.log('blur event', event);
};
const handleFocus = (event: FocusEvent) => {
  console.log('focus event', event);
};
const handleKeydown = (event: KeyboardEvent) => {
  console.log('keydown event', event);
};
</script>
