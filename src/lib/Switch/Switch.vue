<template>
  <button
    class="gulu-switch"
    @click="toggle"
    :class="{
      'gulu-checked': value,
      disabled: props.disabled || props.loading,
      'gulu-switch-loading': props.loading,
    }"
    :disabled="props.disabled || props.loading"
  >
    <!-- loading -->
    <span>
      <svg
        v-if="props.loading"
        class="icon loading-svg"
        :class="{ 'loading-color': value }"
        t="1665198105943"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="21285"
        width="32"
        height="32"
      >
        <path
          d="M533.333333 682.666667v192h-64v-192h64z m-175.317333-72.618667l45.269333 45.269333-135.765333 135.744-45.248-45.226666 135.744-135.786667z m286.634667 0l135.744 135.765333-45.226667 45.248-135.786667-135.744 45.269334-45.269333zM330.666667 480v64h-192v-64h192z m533.333333 0v64h-192v-64h192z m-128.853333-247.061333l45.248 45.226666-135.744 135.786667-45.269334-45.269333 135.765334-135.744z m-467.626667 0l135.765333 135.744-45.269333 45.269333-135.744-135.765333 45.226667-45.248zM533.333333 149.333333v192h-64V149.333333h64z"
          p-id="21286"
        ></path>
      </svg>
    </span>

    <!-- inner-icon -->
    <template v-if="isNeedIcon">
      <div class="switch-bg-inner">
        <span
          class="switch-icon-box switch-on"
          :class="{ 'is-show': props.value, 'is-hide': !props.value }"
        >
          <svg
            class="svg-on"
            t="1665162660533"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="16541"
            width="32"
            height="32"
          >
            <path
              d="M939.36 218.912a32 32 0 0 1 45.856 44.672l-538.016 552a32 32 0 0 1-43.776 1.92L63.872 526.048a32 32 0 1 1 41.696-48.544l316.768 271.936L939.36 218.88z"
              p-id="16542"
              fill="#ffffff"
            ></path>
          </svg>
        </span>

        <span
          class="switch-icon-box switch-off"
          :class="{ 'is-show': !props.value, 'is-hide': props.value }"
        >
          <svg
            class="svg-off"
            t="1665163116035"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3748"
            width="32"
            height="32"
          >
            <path
              d="M548.992 503.744L885.44 167.328a31.968 31.968 0 1 0-45.248-45.248L503.744 458.496 167.328 122.08a31.968 31.968 0 1 0-45.248 45.248l336.416 336.416L122.08 840.16a31.968 31.968 0 1 0 45.248 45.248l336.416-336.416L840.16 885.44a31.968 31.968 0 1 0 45.248-45.248L548.992 503.744z"
              p-id="3749"
            ></path>
          </svg>
        </span>
      </div>
    </template>
  </button>
</template>
<script lang="ts" setup="props, context">

const props = defineProps({
  value: {
    type: Boolean,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  isNeedIcon: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits<{
  (e: 'update:value', visible: boolean): void
}>()

const toggle = () => {
  emits("update:value", !props.value);
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$activeColor: rgb(60, 190, 241);

.gulu-switch {
  height: $h;
  width: $h * 1.9;
  padding: 0;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h / 2);
  position: relative;
  transition: background 300ms;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }

  &.gulu-checked {
    background: $activeColor;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.gulu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  .switch-bg-inner {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .switch-icon-box {
      position: absolute;
      width: calc($h * 0.5);
      height: calc($h * 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.4s;
      > svg {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .svg-on {
        fill: #0f0;
      }

      .svg-off {
        fill: #fff;
      }
    }

    .switch-on {
      left: 15%;
    }
    .switch-off {
      right: 15%;
    }

    .is-show {
      opacity: 1;
    }
    .is-hide {
      opacity: 0;
    }
  }
}

.disabled {
  cursor: not-allowed;
}

// loading
.gulu-switch-loading {
  opacity: 0.6;
}
.loading-color {
  color: $activeColor;
}
.loading-svg {
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
