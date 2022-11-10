<template>
<div>
  <div class="topnav-and-banner">
    <TopNav />
    <div class="banner">
      <h1>Poor UI</h1>
      <h2>a UI parody of Material Design.</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">Get Stared</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>组件的源代码简洁</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts" setup>
  import TopNav from "../components/TopNav.vue";
</script>

<style lang="scss" scoped>
$green: #0abeb2;
$border-radius: 4px;
$color: #007974;

.topnav-and-banner {
  background-image: linear-gradient(56deg, rgba(43, 46, 224, 0.15) 0%, rgba(26, 218, 182, 0.15) 100%),
        linear-gradient(336deg, rgb(50, 52, 221), rgb(60, 239, 241));
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 94px auto 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    >ul {
      >li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
      li {
        width: 33.3333%;
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      margin: 16px 0;
      display: grid;
      justify-content: center;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  >h1 {
    margin-bottom: 10px;
  }
  >h2 {
    margin-bottom: 16px;
  }
  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      color: #3590db;
      display: inline-block;
      padding: 4px 12px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
