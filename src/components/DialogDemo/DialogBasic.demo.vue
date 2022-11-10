<demo>
  基本使用
</demo>

<template>
  <div>
    <Button @click="visible = true">打开对话框</Button>

    <Dialog
      title="tips"
      width="25vw"
      v-model:visible="visible"
      :confirm="confirmHandle"
      :cancel="cancelHandle"
    >
      <span>this is a message</span>
    </Dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Button, Dialog } from "poor-ui";

const visible = ref(false);

const confirmHandle = () => {
  console.log("confirm");
  visible.value = false;
};

const cancelHandle = () => {
  console.log("cancel");
  visible.value = false;
};
</script>
