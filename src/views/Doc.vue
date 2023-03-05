<template>
<div class="layout">
  <TopNav class="nav" />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link active-class="active" to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li v-for="(item, index) in components" :key="index">
          <router-link active-class="active" :to="item.to">{{ item.name }}</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts" setup>
  import TopNav from "../components/TopNav.vue";
  import {inject, ref} from "vue";
  import type {Ref} from 'vue';

  const menuVisible = inject < Ref < boolean >> ("menuVisible");

  const components = ref<{name: string, to: string}[]>([
    {name: 'Container', to: '/doc/container'},
    {name: 'Layout', to: '/doc/layout'},
    {name: 'Switch', to: '/doc/switch'},
    {name: 'Button', to: '/doc/button'},
    {name: 'Dialog', to: '/doc/dialog'},
    {name: 'Input', to: '/doc/input'},
    {name: 'Tabs', to: '/doc/tabs'},
    {name: 'Toast', to: '/doc/toast'},
  ])

</script>

<style lang="scss" scoped>
$aside-index : 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 64px;
  left: 0;
  height: 100%;
  z-index: $aside-index;

  >h2 {
    margin-bottom: 4px;
    margin-left: 4px;
    padding: 4px 12px;
  }

  >ol {
    >li {
      padding: 6px;
      >a {
        display: block;
        text-decoration: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        padding: 4px 12px;
      }

      .router-link-active {
        background: white;
      }
    }
  }

  .active {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

main {
  overflow: auto;
}
</style>
