import type { ToastProps } from "./toast.d";

import { createVNode, render, VNode, h } from "vue";
import ToastComponent from './ToastComponent.vue';

const ToastQueue: Array<VNode> = [];

const FIRST_TOAST_OFFSET_HEIGHT = 15;
const SINGLE_TOAST_HEIGHT = 44;
const TOAST_SPACING = 10;

let index = 1;


const Toast = (options: ToastProps) => {
  const _options = {
    ...options,
    id: `common-toast-${index++}`,
  };

  createToast(_options);
};


const createToast = (options: ToastProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const vm = createVNode(ToastComponent,{
      ...options,
      top: FIRST_TOAST_OFFSET_HEIGHT + ToastQueue.length * (SINGLE_TOAST_HEIGHT + TOAST_SPACING),
      onDestroy: () => {
        onDestroy(options.id, div);
      }
  });

  ToastQueue.push(vm);
  render(vm, div);
};

const onDestroy = (id: string, wrapper: HTMLDivElement) => {
  render(null, wrapper);
  wrapper.remove();

  const currentIndex = ToastQueue.findIndex(item => {
    return item.component.props.id === id;
  });

  if (currentIndex === -1) return;
  const h = ToastQueue[currentIndex].el.offsetHeight; // 获取元素高度

  ToastQueue.splice(currentIndex, 1);
  if (ToastQueue.length < 1) return;

  for (let i = currentIndex; i < ToastQueue.length; i++) {
    ToastQueue[i].component.props.top = parseInt(ToastQueue[i].el.style.top) - h - (SINGLE_TOAST_HEIGHT + TOAST_SPACING);
  }
};

export { Toast };