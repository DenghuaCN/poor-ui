import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import Switch from '../Switch.vue';


describe('Switch', () => {
  // default status
  it('default switch', () => {
    const wrapper = mount(Switch, {
      props: {
        value: false,
        disabled: false
      }
    })
    expect(wrapper.classes()).toContain('gulu-switch');
    expect(wrapper.classes()).not.toContain('gulu-checked');
  });

  // component status update
  it('component status update', async () => {
    const wrapper = mount({
      components: { 'Switch': Switch },
      template: `
        <Switch v-model:value="value" />
      `,
      setup() {
        const value = ref(false);
        return {
          value
        };
      }
    });

    const VM = wrapper.vm;

    await wrapper.trigger('click');
    expect(VM.value).toEqual(true);
    expect(wrapper.classes()).toContain('gulu-checked');
    await wrapper.trigger('click');
    expect(VM.value).toEqual(false);
    expect(wrapper.classes()).not.toContain('gulu-checked');
  })

  // event change
  it('event change', async () => {
    const wrapper = mount({
      components: { 'Switch': Switch },
      template: `
        <Switch v-model:value="value" @update:value="handleChange" />
      `,
      setup() {
        const value = ref(false);
        const update = ref(false);
        const handleChange = (value: boolean) => {
          update.value = value;
        };

        return {
          value,
          update,
          handleChange
        }
      }
    });

    const VM = wrapper.vm;

    await wrapper.trigger('click');
    expect(VM.value).toEqual(true);
    expect(VM.update).toEqual(true);
    expect(wrapper.classes()).toContain('gulu-checked');

    await wrapper.trigger('click');
    expect(VM.value).toEqual(false);
    expect(VM.update).toEqual(false);
    expect(wrapper.classes()).not.toContain('gulu-checked');
  })


  // disabled
  it('disabled staus', async () => {
    const wrapper = mount({
      components: { 'Switch': Switch },
      template: `
        <Switch v-model:value="value" disabled />
      `,
      setup() {
        const value = ref(false);
        return {
          value
        }
      }
    });

    const VM = wrapper.vm;
    await wrapper.trigger('click');
    expect(VM.value).toEqual(false);
    expect(wrapper.classes()).not.toContain('gulu-checked');
  })
});