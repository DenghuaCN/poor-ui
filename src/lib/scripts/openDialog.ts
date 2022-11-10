import Dialog from "../Dialog/Dialog.vue";
import { createApp, h, VNode } from "vue";

interface Options {
  title: string | VNode;
  content?: string;
  confirm?: () => void;
  cancel?: () => void;
}

export const openDialog = (options: Options) => {
  const { title, content, confirm, cancel } = options;
  const div = document.createElement("div");

  document.body.appendChild(div);

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          title,
          visible: true,
          "onUpdate:visible": (newVisible: boolean) => {
            if (newVisible === false) {
              app.unmount();
              div.remove();
            }
          },
          confirm,
          cancel
        },
        [
          content,
        ],
      );
    },
  });

  app.mount(div);
};
