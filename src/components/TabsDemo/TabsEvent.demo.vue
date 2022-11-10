<demo>
  Tab切换事件
</demo>

<template>
  <Tabs v-model:selected="value" @update:selected="handleChange">
    <Tab title="Tab1">Tab1</Tab>
    <Tab title="Tab2">Tab2</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import { Tabs, Tab } from "poor-ui";
import { ref } from 'vue';

const value = ref('Tab1')
const handleChange = (currentValue: string) => {
  console.log('tabs change event:', currentValue);
};
</script>
