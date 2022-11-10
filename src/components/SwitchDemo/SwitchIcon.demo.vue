<demo>
 icon图标
</demo>

<template>
  <Switch v-model:value="bool" :isNeedIcon="true" />
</template>

<script lang="ts" setup>
import { Switch } from "poor-ui";
import { ref } from "vue";

const bool = ref(true);
</script>
