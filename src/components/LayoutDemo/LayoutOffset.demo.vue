<demo>
  分栏偏移
</demo>

<template>
  <Row :gutter="20">
    <Col :span="6" bg="#515bd4"></Col>
    <Col :span="6" :offset="6" bg="#8134af"></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="6" :offset="6" bg="#dd2a7b"></Col>
    <Col :span="6" :offset="6" bg="#feda77"></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="12" :offset="6" bg="#8134af"></Col>
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
}
</style>