<demo>
 loading
</demo>

<template>
  <div>
    <Switch v-model:value="valueA" loading />
  </div>
  <div>
    <Switch v-model:value="valueB" loading />
  </div>
</template>

<script lang="ts" setup>
import { Switch } from "poor-ui";
import { ref } from "vue";

const valueA = ref(false);
const valueB = ref(true);
</script>
