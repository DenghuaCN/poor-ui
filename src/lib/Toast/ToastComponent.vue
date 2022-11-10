<template>
  <div v-show="visible"
    class="toast"
    :class="classes"
    :style="{top: `${top}px`}"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <span>{{ title }}</span>
    <span v-if="isShowClose" @click="closeHandler" class="toast-icon-close"></span>
  </div>
</template>

<script lang="ts">
  export default { name: 'Toast' };
</script>

<script lang="ts" setup>
import { onMounted, PropType, computed, ref } from 'vue';
import type { ToastType } from './toast.d';


const emits = defineEmits(['destroy']);
const props = defineProps({
  // 提示文本
  title: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<ToastType>,
    required: false,
    default: 'normal',
    validator: (val: string) => ['normal', 'secondary', 'success', 'warning', 'error'].includes(val)
  },
  delay: {
    type: Number,
    default: 3000,
  },
  center: {
    type: Boolean,
    default: false
  },
  isShowClose: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    default: '',
  },
  top: {
    type: Number,
    default: 10
  }
})


const visible = ref<boolean>(false);
const timerId = ref<ReturnType<typeof setTimeout>>();

onMounted(() => {
  visible.value = true;
  startTimer();
})

// 关闭Toast
const closeHandler = () => {
  visible.value = true;
  emits('destroy');
}

// 开启计时器
const startTimer = () => {
  if (props.delay <= 0) return;

  timerId.value = setTimeout(() => {
    closeHandler();
  }, props.delay);
}
// 关闭计时器
const clearTimer = () => {
  clearTimeout(timerId.value);
  timerId.value = null;
}

const classes = computed(() => [
  'common-toast',
  {
    'common-toast-center': props.center,
    [`common-toast-${props.type}`]: props.type,
  },
]);

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

<style lang="scss">
.toast {

  &-icon-close {
    position: absolute;
    right: 16px;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);

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

</style>
