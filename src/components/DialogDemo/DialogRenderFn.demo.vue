<demo>
  支持使用方法调用
</demo>

<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button, openDialog } from "poor-ui";

const showDialog = () => {
  openDialog({
    title: "tips",
    content: "render function",
    confirm() {
      console.log("ok");
      return false;
    },
    cancel() {
      console.log("cancel");
    },
  });
};
</script>
