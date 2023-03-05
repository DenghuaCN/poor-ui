<demo>
  对齐方式
</demo>

<template>
  <Row justify="start">
    <Col :span="6" bg="#5CF2E8"></Col>
    <Col :span="6" bg="#FE9000" class="text-center">start</Col>
    <Col :span="6" bg="#29335C"></Col>
  </Row>
  <Row justify="center">
    <Col :span="6" bg="#5CF2E8"></Col>
    <Col :span="6" bg="#FE9000" class="text-center">center</Col>
    <Col :span="6" bg="#29335C"></Col>
  </Row>
  <Row justify="end">
    <Col :span="6" bg="#5CF2E8"></Col>
    <Col :span="6" bg="#FE9000" class="text-center">end</Col>
    <Col :span="6" bg="#29335C"></Col>
  </Row>
  <Row justify="space-between">
    <Col :span="6" bg="#5CF2E8"></Col>
    <Col :span="6" bg="#FE9000" class="text-center">space-between</Col>
    <Col :span="6" bg="#29335C"></Col>
  </Row>
  <Row justify="space-around">
    <Col :span="6" bg="#5CF2E8"></Col>
    <Col :span="6" bg="#FE9000" class="text-center">space-around</Col>
    <Col :span="6" bg="#29335C"></Col>
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
.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-variant: small-caps;
  letter-spacing: 0.6px;
}

</style>