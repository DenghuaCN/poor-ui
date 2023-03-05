<demo>
  混合布局
</demo>

<template>
  <Row :gutter="20">
    <Col :span="16" bg="#7A57D1"></Col>
    <Col :span="8" bg="#5BE7C4"></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="8" bg="#7A57D1"></Col>
    <Col :span="8" bg="#5BE7C4"></Col>
    <Col :span="4" bg="#F5F7FA"></Col>
    <Col :span="4" bg="#50C1E9"></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="4" bg="#7A57D1"></Col>
    <Col :span="16" bg="#5BE7C4"></Col>
    <Col :span="4" bg="#50C1E9"></Col>
  </Row>
  <Row :gutter="20">
    <Col :span="8" bg="#7A57D1"></Col>
    <Col :span="8" bg="#5BE7C4"></Col>
    <Col :span="8" bg="#50C1E9"></Col>
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