<demo>
  基本使用
</demo>

<template>
  <Tabs v-model:selected="x">
    <Tab title="Tab1">Tab1</Tab>
    <Tab title="Tab2">Tab2</Tab>
    <Tab title="Tab3">Tab3</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import { Tabs, Tab } from "poor-ui";
import { ref } from 'vue';

const x = ref('Tab1')
</script>
