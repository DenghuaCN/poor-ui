<template>
  <section :class="['gulu-container', { 'gulu-container-aside': isAside }]">
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
  import { useSlots, computed, VNode, Component } from 'vue';

  const slots = useSlots();

  const isAside = computed(() => {
    if (!slots?.default) return false;

    const children: Array<VNode> = slots.default();
    return children.some(child => {
      const tag = (child.type as Component).name;
      return tag === 'Aside';
    });
  });

</script>