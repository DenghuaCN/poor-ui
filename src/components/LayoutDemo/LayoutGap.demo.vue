<demo>
  分栏间隔
</demo>

<template>
  <Row gutter="20">
    <Col span="6">
      <div :style="{backgroundColor: '#41b6e6'}"></div>
    </Col>
    <Col span="6">
      <div :style="{backgroundColor: '#001871'}"></div>
    </Col>
    <Col span="6">
      <div :style="{backgroundColor: '#ffb549'}"></div>
    </Col>
    <Col span="6">
      <div :style="{backgroundColor: '#41b6e6'}"></div>
    </Col>
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
  & > div {
    min-height: 36px;
    border-radius: 8px;
  }
}
</style>