<template>
  <button
    class="gulu-button"
    :class="classes"
    :disabled="disabled"
    @click="Emits('click', $event)"
  >
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup="props">
import { computed, PropType } from "vue";
import type { ButtonTheme, ButtonSize } from './Button.d';

const props = defineProps({
  theme: {
    type: String as PropType<ButtonTheme>,
    default: 'button'
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'normal'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  danger: {
    type: Boolean,
    default: false
  }
});
const Emits = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const classes = computed(() => {
  const { theme, size, danger } = props;

  return {
    [`gulu-theme-${theme}`]: theme,
    [`gulu-size-${size}`]: size,
    [`gulu-danger-${theme ? theme : "button"}`]: danger,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #000000d9;

$bgBlue: #1890ff;
$blue: #1890ff;
$activeBlue: #096dd9;
$hoverBlue: #40a9ff;

$dangerBg: #ff4d4f;
$dangerHover: #ff7875;
$dangerActive: #d9363e;

$radius: 4px;
$red: red;
$grey: #00000040;

$disabledColor: #00000040;
$disabledBgColor: #f5f5f5;
$disabledBorderColor: #d9d9d9;

.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 200ms ease;

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  // 尺寸
  &.gulu-size-big {
    font-size: 24px;
    height: 40px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  // theme
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }


  &.gulu-theme-primary {
    border-color: transparent;
    box-shadow: none;
    background-color: $bgBlue;
    color: #fff;

    > .gulu-loadingIndicator {
      border-color: #fff #fff #fff transparent;
    }

    &:hover,
    &:focus {
      background-color: $hoverBlue;
    }
  }

  &.gulu-theme-button {
    &[danger] {
      background-color: $dangerBg;
    }
  }

  // danger
  &.gulu-danger-button,
  &.gulu-danger-primary {
    background-color: $dangerBg;
    border-color: $dangerBg;
    color: #fff;

    &:hover {
      background-color: $dangerHover;
      border-color: $dangerHover;
    }
    &:focus {
      background-color: $dangerActive;
      border-color: $dangerActive;
    }
    > .gulu-loadingIndicator {
      border-color: #fff #fff #fff transparent;
    }
  }
  &.gulu-danger-link,
  &.gulu-danger-text {
    color: $dangerBg;
    background-color: #fff;

    &:hover {
      color: $dangerHover;
    }
    &:focus {
      color: $dangerActive;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: $disabledColor;
    background-color: $disabledBgColor;
    border-color: $disabledBorderColor;

    &:hover {
      border-color: $disabledBorderColor;
    }
  }

  &.gulu-theme-link,
  &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;
      background-color: inherit;
      border-color: transparent;
    }
  }

  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
    border-color: $blue $blue $blue transparent;
  }
}

@keyframes gulu-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
