<demo>
  基本使用
</demo>

<template>

  <Container>
    <Header bg="#001871">Header</Header>
    <Content bg="#41b6e6">Content</Content>
  </Container>

  <Container>
    <Header bg="#001871">Header</Header>
    <Content bg="#41b6e6">Content</Content>
    <Footer bg="#ffb549">Footer</Footer>
  </Container>

  <Container>
    <Aside bg="#ff585d">Aside</Aside>
    <Content bg="#41b6e6">Content</Content>
  </Container>

  <Container>
    <Header bg="#001871">Header</Header>
    <Container>
      <Aside bg="#ff585d">Aside</Aside>
      <Content bg="#41b6e6">Content</Content>
    </Container>
  </Container>

  <Container>
    <Header bg="#001871">Header</Header>
    <Container>
      <Aside width="200px" bg="#ff585d" >Aside</Aside>
      <Container>
        <Content bg="#41b6e6">Content</Content>
        <Footer bg="#ffb549">Footer</Footer>
      </Container>
    </Container>
  </Container>

  <Container>
    <Aside width="100px" bg="#ff585d">Aside</Aside>
    <Container>
      <Header bg="#001871">Header</Header>
      <Content bg="#41b6e6">Content</Content>
      <Footer bg="#ffb549">Footer</Footer>
    </Container>
  </Container>

</template>

<script lang="ts" setup>
import { Container, Header, Content, Aside, Footer } from 'poor-ui';

</script>

<style lang="scss" scoped>
.gulu-container {
  margin-bottom: 40px;
  color: #fff;

  * {
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .gulu-header,
  .gulu-footer {
    line-height: 60px;
  }
  .gulu-content {
    line-height: 120px;
  }
  .gulu-aside {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
