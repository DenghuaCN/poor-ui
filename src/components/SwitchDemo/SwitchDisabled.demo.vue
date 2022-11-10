<demo>
 Switch 失效状态
</demo>

<template>
  <Switch v-model:value="bool" :disabled="true" />
</template>

<script lang="ts" setup>
import { Switch } from "poor-ui";
import { ref } from "vue";

const bool = ref(false);
</script>
