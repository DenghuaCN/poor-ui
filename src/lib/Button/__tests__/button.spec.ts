import { describe, it, expect, vi } from "vitest";
import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import Button from '../Button.vue';

describe('Button', () => {
  // default status;
  it.concurrent('default button', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes('gulu-button')).toBe(true);
    expect(wrapper.classes('gulu-theme-button')).toBe(true);
    expect(wrapper.classes('gulu-size-normal')).toBe(true);
    expect(wrapper.classes('gulu-danger-button')).toBe(false);
  });
  // theme
  it.concurrent('theme', () => {
    const wrapper = mount(Button,{
      props: {theme: 'link'}
    });
    expect(wrapper.classes('gulu-theme-link')).toBe(true);
  })
  // size
  it.concurrent('size', () => {
    const wrapper = mount(Button, {
      props: {size: 'big'}
    });
    expect(wrapper.classes('gulu-size-big')).toBe(true);
  })
  // danger
  it.concurrent('danger', () => {
    const wrapper = mount(Button, {
      props: { danger: true }
    });
    expect(wrapper.classes('gulu-danger-button')).toBe(true);

    const otherWrapper = mount(Button, {
      props: {
        theme: 'link',
        danger: true
      }
    });
    expect(otherWrapper.classes('gulu-danger-link')).toBe(true);
  });
  // disabled
  it.concurrent('disabled', () => {
    const wrapper = mount(Button, {
      props: {disabled: true}
    });
    expect(wrapper.attributes('disabled')).toBe('');
  });

  // slot
  it.concurrent('slot', () => {
    const buttonText = 'hello world';
    const wrapper = mount(Button, {
      slots: { default: buttonText }
    });
    expect(wrapper.text()).toEqual(buttonText);
  });

  // click event
  it.concurrent('click event', async () => {
    const wrapper = mount(Button);

    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });
});