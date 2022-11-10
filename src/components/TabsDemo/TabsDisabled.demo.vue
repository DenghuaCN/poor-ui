<demo>
  禁用某一项
</demo>

<template>
  <Tabs v-model:selected="value">
    <Tab title="Tab1">Tab1</Tab>
    <Tab title="Tab2" disabled>Tab2</Tab>
    <Tab title="Tab3">Tab3</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import { Tabs, Tab } from "poor-ui";
import { ref } from 'vue'

const value = ref('Tab1')
</script>
