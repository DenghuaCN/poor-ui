import "./lib/styles/index.scss";
import "./assets/styles/reset.scss";
import './assets/svg.js'
import 'github-markdown-css'
import 'highlight.js/styles/atom-one-light.css';

import { createApp } from "vue";
import { router } from "./router";
import Markdown from './components/Markdown.vue';
import hljs from 'vue3-highlightjs'
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(hljs);
app.mount("#app");
app.component("Markdown", Markdown)
