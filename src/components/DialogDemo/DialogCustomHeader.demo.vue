<demo>
  自定义Dialog Header
</demo>

<template>
  <div>
    <Button @click="visible = true">打开对话框</Button>

    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
      :confirm="confirmHandle"
      :cancel="cancelHandle"
    >
      <template #title>
        <header>
          <span>custom header</span>
          <Button danger @click="visible = false">close</Button>
        </header>
      </template>

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
