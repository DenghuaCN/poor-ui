import { describe, it, expect, vi } from 'vitest';
import { ref } from "vue";
import { DOMWrapper, mount } from '@vue/test-utils';
import Input from '../Input.vue';

const defaultValue = 'default value';
const defaultPlaceholder = 'default placeholder';
const _mount = (props: object) => {
  return mount(Input, {
    props: {
      value: defaultValue,
      ...props
    }
  });
}

type EventType = 'clear' | 'change' | 'keydown' | 'updateAndInput' | 'focusAndBlur';
const mountEvent = (eventType: EventType, initialValue = '') => {
  const eventMap = {
    clear: `clearable @clear="handle"`,
    change: `@change="handle"`,
    keydown: `@keydown="handle"`,
    updateAndInput: `@update:value="handle" @input="handleOther"`,
    focusAndBlur: `@focus="handle" @blur="handleOther"`
  };

  return mount({
    components: {Input},
    template: `
      <Input
        v-model:value="value"
        ${eventMap[eventType]}
      />`,
    setup() {
      const value = ref(initialValue);
      const handle = vi.fn();
      const handleOther = vi.fn();
      return { value, handle, handleOther };
    }
  });
};

describe('Input', () => {
  // default input
  it.concurrent('default input', () => {
    const wrapper = _mount({placeholder: defaultPlaceholder});
    expect(wrapper.classes()).toContain('common-input-wrapper');
    expect(wrapper.classes()).toContain('common-input-size-medium');
    const input = wrapper.find('input');

    expect(input.classes()).toContain('common-input-theme-normal');
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('placeholder')).toBe(defaultPlaceholder);
    expect(input.element.value).toBe(defaultValue);
  });

  // size
  it.concurrent('size', () => {
    const wrapper = _mount({size: 'large'});
    expect(wrapper.classes()).toContain('common-input-size-large');
  });

  // maxlength
  it.concurrent('maxlength', () => {
    const MAX_LENGTH = 5;
    const wrapper = _mount({ maxlength: MAX_LENGTH });
    const input = wrapper.find('input');
    expect(input.attributes('maxlength')).toBe(String(MAX_LENGTH));
  })

  // clearable
  it.concurrent('clearable', () => {
    const wrapper = _mount({ clearable: true });
    const span = wrapper.find('span');
    expect(span.classes('common-input-clearable')).toBe(true);
  });

  // disabled
  it.concurrent('disabled', () => {
    const wrapper = _mount({ disabled: true });
    const input = wrapper.find('input');
    expect(input.attributes('disabled')).toBe('');
  })
});

describe('Input Events', () => {
  it('clear event', async () => {
    const initialValue = 'clear event';
    const wrapper = mountEvent('clear', initialValue);

    const input = wrapper.find('input');
    const clearable = wrapper.find('.common-input-clearable');

    await clearable.trigger('click');
    expect(wrapper.vm.value).toBe('');
    expect(input.element.value).toBe('');
    expect(wrapper.vm.handle).toHaveBeenCalled();
  });

  it.concurrent('input & update event', async () => {
    const initialValue = 'input & update event';
    const wrapper = mountEvent('updateAndInput');
    const vm = wrapper.vm;
    const input = wrapper.find('input');
    input.element.value = initialValue;
    await input.trigger('input');

    expect(vm.value).toBe(initialValue);
    expect(input.element.value).toBe(initialValue);

    expect(vm.handle).toHaveBeenCalled();
    expect(vm.handleOther).toHaveBeenCalled();
  })


  it.concurrent('change event', () => {
    const wrapper = mountEvent('change');
    const vm = wrapper.vm;
    const input = wrapper.find('input').element;

    const dispatchEvent = (el: HTMLElement, eventName: string, value: any) => {
      const event = new Event(eventName);
      Object.defineProperty(event, 'target', {
        value: {value}
      });
      el.dispatchEvent(event);
    }
    dispatchEvent(input, 'change', 'haha');

    expect(vm.handle).toHaveBeenCalled();
    expect(vm.handle.mock.calls[0][0]).toBe('haha');
  })

  it.concurrent('focus & blur event', async () => {
    const initialValue = 'focus & blur event';
    const wrapper = mountEvent('focusAndBlur', initialValue);
    const input = wrapper.find('input');
    const vm = wrapper.vm;

    await input.trigger('focus');
    expect(vm.handle).toHaveBeenCalled();
    expect(vm.handle.mock.calls[0][0].type).toBe('focus')
  })

  it.concurrent('keydown event',async () => {
    const initialValue = 'keydown event';
    const wrapper = mountEvent('keydown', initialValue);
    const vm = wrapper.vm;
    const input = wrapper.find('input');

    await input.trigger('keydown');
    expect(vm.handle).toHaveBeenCalled();
    expect(vm.handle.mock.calls[0][0].type).toBe('keydown');
  })

})