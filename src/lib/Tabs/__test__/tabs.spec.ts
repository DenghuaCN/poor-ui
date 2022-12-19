import { describe, it,  expect, vi } from 'vitest';
import { Component, ComponentPublicInstance, nextTick, ref } from 'vue';
import { mount, VueWrapper } from '@vue/test-utils';
import Tabs from '../Tabs.vue';
import Tab from '../Tab.vue';


const mountVM = () => {
  return mount({
    components: {
      'Tabs': Tabs,
      'Tab': Tab,
    },
    template: `
      <Tabs v-model:selected="selected">
        <Tab title="Tab0">Tab0</Tab>
        <Tab title="Tab1">Tab1</Tab>
      </Tabs>
    `,
    setup() {
      const selected = ref('Tab0');
      return { selected };
    }
  });
}


describe('Tabs', () => {
  it.concurrent('create', async () => {
    const wrapper = mountVM();
    const tabsWrapper = wrapper.findComponent(Tabs);
    const tabWrapper = wrapper.findComponent(Tab);

    expect(tabsWrapper.classes()).toContain('gulu-tabs');
    expect(tabWrapper.attributes('title')).toBe('Tab0');

    const tabsList = tabsWrapper.find('.gulu-tabs-nav').findAll('.gulu-tabs-nav-item');
    expect(tabsList.length).toBe(2);
    expect(tabsList[0].text()).toBe('Tab0');
    expect(tabsList[1].text()).toBe('Tab1');

    const activeTab = tabsWrapper.find('.selected');
    expect(activeTab.text()).toBe('Tab0');
  });


  it.concurrent('selected', async () => {
    const wrapper = mount({
      components: {
        Tabs,
        Tab
      },
      template: `
        <Tabs v-model:selected="selected" @update:selected="handleChange">
          <Tab title="Tab1">Tab1</Tab>
          <Tab title="Tab2">Tab2</Tab>
        </Tabs>
      `,
      setup() {
        const selected = ref('Tab1');
        const handleChange = vi.fn();
        return { selected, handleChange };
      }
    });

    const vm = wrapper.vm;
    const tabsWrapper = wrapper.findComponent(Tabs);
    const tabList = tabsWrapper.findAll('.gulu-tabs-nav-item');

    tabList[0].trigger('click');
    await nextTick();
    expect(vm.handleChange).toHaveBeenCalled();
  });

  it.concurrent('disabled', () => {
    const wrapper = mount({
      components: {
        Tabs,
        Tab
      },
      template: `
        <Tabs v-model:selected="value" @update:selected="handleChange">
          <Tab title="Tab1">Tab1</Tab>
          <Tab title="Tab2" disabled>Tab2</Tab>
          <Tab title="Tab3">Tab3</Tab>
        </Tabs>
      `,
      setup() {
        const value = ref('Tab1');
        const handleChange = vi.fn();
        return { value, handleChange };
      }
    });

    const vm = wrapper.vm;
    const tabsWrapper = wrapper.findComponent(Tabs);
    const tabList = tabsWrapper.findAll('.gulu-tabs-nav-item');

    expect(tabList[1].classes('gulu-tabs-nav-item-disabled')).toBe(true);
  })

})
