<demo>
  支持定义size
</demo>

<template>
  <div>
    <Input size="mini" v-model:value="value" placeholder="mini"/>
  </div>
  <div>
    <Input size="small" v-model:value="value" placeholder="small"/>
  </div>
  <div>
    <Input size="medium" v-model:value="value" placeholder="medium"/>
  </div>
  <div>
    <Input size="large" v-model:value="value" placeholder="large"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Input } from "poor-ui";

const value = ref('');
</script>
