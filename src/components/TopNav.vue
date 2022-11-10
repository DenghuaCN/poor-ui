<template>
  <div class="topnav" :class="{ 'top-nav-bg': !isHomeRoute }">
    <router-link to="/" class="logo">
      <div class="logo-box">
        <svg t="1668085194559" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4687" width="200" height="200"><path d="M341.333333 708.693333 341.333333 655.786667 597.333333 508.16 597.333333 308.48 384 431.786667 170.666667 308.48 170.666667 554.666667 128 579.413333 85.333333 554.666667 85.333333 213.333333 130.986667 186.88 384 333.226667 551.68 236.373333 637.013333 186.88 682.666667 213.333333 682.666667 557.226667 465.92 682.666667 638.72 782.08 853.333333 658.346667 853.333333 469.333333 896 444.586667 938.666667 469.333333 938.666667 707.413333 638.72 880.64 341.333333 708.693333M938.666667 416 896 440.746667 853.333333 416 853.333333 366.08 896 341.333333 938.666667 366.08 938.666667 416Z" p-id="4688" :fill="isHomeRoute? '#2ee1e3' : '#fff'"></path></svg>
        <span :style="{ color: isHomeRoute ? '#3ceff1' : '#fff' }">Poor UI</span>
      </div>
    </router-link>
    <ul class="menu">
      <li :style="{ color: isHomeRoute ? '#359bda' : '#fff' }">
        <router-link to="/doc">Doc</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup="props">
import { inject, Ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const menuVisible = inject<Ref<boolean>>("menuVisible"); // get

// 是否在首页
const isHomeRoute = computed(() => {
  return route.path === "/";
});

</script>
<style lang="scss" scoped>
$color: #007974;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  a {
    text-decoration: none;
  }
  > .logo {
    margin-right: auto;

    .logo-box {
      display: flex;
      align-items: center;

      > .icon {
        width: 32px;
        height: 32px;
      }

      > span {
        display: inline-block;
        margin-left: 6px;
      }
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }

    > .logo {
      margin: 0 auto;
    }

    > .toggleAside {
      display: inline-block;
    }
  }
}

.top-nav-bg {
  background: linear-gradient(
      56deg,
      rgba(43, 46, 224, 0.15) 0%,
      rgba(26, 218, 182, 0.15) 100%
    ),
    linear-gradient(336deg, rgb(50, 52, 221), rgb(60, 239, 241));
}
</style>
