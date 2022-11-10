import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo/index.vue";
import ButtonDemo from "./components/ButtonDemo/index.vue";
import DialogDemo from "./components/DialogDemo/index.vue";
import TabsDemo from "./components/TabsDemo/index.vue";
import ToastDemo from "./components/ToastDemo/index.vue";
import InputDemo from './components/InputDemo/index.vue';

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "tabs", component: TabsDemo },
        { path: "input", component: InputDemo },
        { path: "dialog", component: DialogDemo },
        { path: "toast", component: ToastDemo },
      ],
    },
  ],
});
router.afterEach(() => {
});
