<template>
  <h1>模态窗口</h1>
  <p class="desc">
    需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal
    在当前页面正中打开一个浮层，承载相应的操作。
  </p>

  <li>模块窗口应集中用户注意力以确保用户的事务得到解决</li>
  <li>模块窗口应直接传达信息并致力于完成任务</li>
  <li>对话框应出现以响应用户任务或操作，并带有相关或上下文信息</li>

  <Demo :component="DialogBasic" />
  <Demo :component="DialogCustomHeader" />
  <Demo :component="DialogCenter" />
  <Demo :component="Dialog3RenderFn" />
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import DialogBasic from "./DialogBasic.demo.vue";
import DialogCustomHeader from "./DialogCustomHeader.demo.vue";
import DialogCenter from "./DialogCenter.demo.vue";
import Dialog3RenderFn from "./DialogRenderFn.demo.vue";

export default {
  components: {
    Demo,
  },
  setup() {
    return {
      DialogBasic,
      DialogCustomHeader,
      DialogCenter,
      Dialog3RenderFn,
    };
  },
};
</script>

<style lang="scss" scoped>
.desc {
  margin-bottom: 10px;
}
</style>
