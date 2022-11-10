<template>
  <div class="common-input-wrapper"
    :class="{[`common-input-size-${size}`]: size}"
    :style="`width:${width}`"
  >

  <input
    ref="input"
    class="common-input"
    v-bind="$attrs"
    :class="classes"
    :disabled="disabled"
    :maxlength="maxlength"
    :placeholder="placeholder"
    :readonly="readonly"
    :type="type === 'password' ? (isShowPassword ? 'text' : 'password') : type"
    :value="value"
    @blur="blurHandle"
    @input="inputHandle"
    @change="changeHandle"
    @focus="focusHandle"
    @keydown="keydownHandle"
  />

  <span class="common-input-clearable"
    v-if="clearable"
    @click="clearHandle">
  </span>

  </div>
</template>

<script lang="ts" setup="props, context">
  import type { PropType } from 'vue';
  import type { InputTheme, InputSize, InputElementEvent } from './input.d';

  import { computed, nextTick, ref } from 'vue';

  const props = defineProps({
    value: {
      type: [String, Number],
      required: true,
    },
    // input原生类型
    type: {
      type: String,
      default: 'text'
    },
    // 是否可清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 最大输入字数限制
    maxlength: {
      type: Number,
    },
    placeholder: {
      type: String,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    label: {
      type: String
    },
    labelRight: {
      type: String
    },
    theme: {
      type: String as PropType<InputTheme>,
      default: 'normal',
    },
    size: {
      type: String as PropType<InputSize>,
      default: 'medium'
    }
  });

  const emits = defineEmits<{
    (e: 'update:value', value: string): void,
    (e: 'input', value: string): void,
    (e: 'change', value: string): void,
    (e: 'blur', value: FocusEvent): void,
    (e: 'focus', value: FocusEvent): void,
    (e: 'keydown', value: KeyboardEvent): void,
    (e: 'clear'): void,
  }>();


  const labelRight = ref<HTMLSpanElement>(null);
  const input = ref<HTMLInputElement>(null);
  const isShowPassword = ref<boolean>(false);

  const classes = computed(() => ({
    'common-input-label-left': props.label,
    'common-input-label-right': props.labelRight,
    'common-input-suffix-clear': props.clearable,
    'common-input-suffix-password': props.type === 'password',
    [`common-input-theme-${props.theme}`]: props.theme
  }))

  const focus = () => {
    nextTick(() => {
      input.value.focus();
    })
  };

  const clearHandle = () => {
    emits('update:value', '');
    emits('change', '');
    emits('clear');
    focus();
  }

  const inputHandle = (event: InputElementEvent) => {
    emits('update:value', event.target.value);
    emits('input', event.target.value);
  }
  const blurHandle = (event: FocusEvent) => {
    emits(  'blur', event);
  }
  const changeHandle = (event: InputElementEvent) => {
    emits('change', event.target.value);
  }
  const focusHandle = (event: FocusEvent) => {
    emits('focus', event);
  }
  const keydownHandle = (event: KeyboardEvent) => {
    emits('keydown', event);
  }

</script>

<style lang="scss">
  @import './index.scss';
</style>