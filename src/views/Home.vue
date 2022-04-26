<template>
  <div>
    <div class="topWrapper">
      <TopNav/>
      <div class="banner">
        <h1>琉璃UI</h1>
        <h2>一个UI框架</h2>
        <p class="actions">
          <a href="https://github.com">github</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ball2"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
  components:{
    TopNav
  }
}
</script>

<style lang="scss" scoped>
  .topWrapper{
    //background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);
   // background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
  }
  .features {
    margin: 64px auto;
    width: 400px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    >ul {
      display: flex;
      flex-wrap: wrap;
      >li {
        width: 400px;
        margin: 16px 0;
        display: grid;
        justify-content: start;
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
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions{
      padding: 8px 0;
      a {
        margin:0 8px;
        background: #fff;
        display: inline-block;
        padding: 8px 24px;
        border-radius: 4px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>