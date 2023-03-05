<demo>
  响应式布局
</demo>

<template>
  <Row gutter="10">
    <Col bg="#a3daff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#1ec0ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#0080ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#03a6ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#a3daff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#1ec0ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#0080ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
    <Col bg="#03a6ff" span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" ></Col>
  </Row>
</template>

<script lang="ts" setup>
import { Row, Col } from 'poor-ui';
</script>

<style lang="scss" scoped>
.gulu-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.gulu-col {
  min-height: 36px;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>