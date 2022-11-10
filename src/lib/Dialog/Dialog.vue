<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div
          class="gulu-dialog"
          :class="{ 'gulu-center': props.center }"
          :style="{ 'min-width': props.width }"
        >
          <!-- 默认标题头部区域 -->
          <slot v-if="isHaveTitleSlot" name="title" />
          <header v-else-if="props.title.length > 0">
            <span>{{ props.title }}</span>
            <span @click="close" class="gulu-dialog-close"></span>
          </header>

          <!-- 内容区域 -->
          <main>
            <slot name="default"></slot>
          </main>

          <!-- 页脚按钮 -->
          <footer>
            <Button @click="cancelHandle">取消</Button>
            <Button theme="primary" @click="confirmHandle">确定</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts" setup="props, context">
import Button from "../Button/Button.vue";
import type { confirmType, cancelType } from './Dialog.d';
import { PropType, useSlots } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: '提示',
  },
  visible: {
    type: Boolean,
    required: true
  },
  center: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [String, Number],
    default: '25vw'
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  confirm: {
    type: Function as PropType<confirmType>,
  },
  cancel: {
    type: Function as PropType<cancelType>,
  }
});
const emits = defineEmits<{
  (e: "update:visible", visible: boolean): void;
}>();

const isHaveTitleSlot: boolean = !!useSlots().title;

const close = () => {
  emits("update:visible", false);
};
const onClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    close();
  }
};
const confirmHandle = () => {
  if (props.confirm?.() === false) {
    close();
  }
};
const cancelHandle = () => {
  props.cancel?.();
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 25em;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    // border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 30px 20px;
  }

  > footer {
    // border-top: 1px solid $border-color;
    padding: 16px 16px;
    text-align: right;
    position: relative;
    > .gulu-button {
      margin-right: 8px;
    }
  }

  &-close {
    position: absolute;
    right: 16px;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: rgb(126, 126, 126);
      width: 90%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

.gulu-center {
  header {
    display: flex;
    justify-content: center;
  }

  main {
    display: flex;
    justify-content: center;
  }
  footer {
    display: flex;
    justify-content: center;
    > .gulu-button {
      margin-right: 0;
      &:first-child {
        margin-right: 20px;
      }
    }
  }
}
</style>
