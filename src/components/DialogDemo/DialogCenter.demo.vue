<demo>
  内容居中
</demo>

<template>
  <div>
    <Button @click="visible = true">打开对话框</Button>

    <Dialog
      center
      title="warning"
      v-model:visible="visible"
      :confirm="confirmHandle"
      :cancel="cancelHandle"
    >
      <span>It should be noted that the content will not be aligned in center by default</span>
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
