<demo>
  基础布局
</demo>

<template>
  <Row>
    <Col bg="#08D9D6"></Col>
  </Row>
  <Row>
    <Col span="12" bg="#08D9D6"></Col>
    <Col span="12" bg="#FF2E63"></Col>
  </Row>
  <Row>
    <Col span="8" bg="#08D9D6"></Col>
    <Col span="8" bg="#252A34"></Col>
    <Col span="8" bg="#FF2E63"></Col>
  </Row>
  <Row>
    <Col span="6" bg="#08D9D6"></Col>
    <Col span="6" bg="#252A34"></Col>
    <Col span="6" bg="#FF2E63"></Col>
    <Col span="6" bg="#EAEAEA"></Col>
  </Row>
  <Row>
    <Col span="4" bg="#08D9D6"></Col>
    <Col span="4" bg="#252A34"></Col>
    <Col span="4" bg="#FF2E63"></Col>
    <Col span="4" bg="#EAEAEA"></Col>
    <Col span="4" bg="#08D9D6"></Col>
    <Col span="4" bg="#252A34"></Col>
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