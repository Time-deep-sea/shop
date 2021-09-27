<template>
  <div id="app">
    <a-row class="aRow">
      <a-col :span="8">
        <router-link :to="'/homepage'" ref="demo">
          <img v-if="this.$route.fullPath!=='/homepage'" class="icon" src="./assets/icon/homePage.png" alt="首页">
          <img v-if="this.$route.fullPath==='/homepage'" class="icon" src="./assets/icon/homePage-checked.png" alt="首页">
          <br/>首页
        </router-link>
      </a-col>
      <a-col :span="8">
        <router-link :to="'/cart'">
          <img v-if="this.$route.fullPath!=='/cart'" class="icon" src="./assets/icon/cart.png" alt="购物车">
          <img v-if="this.$route.fullPath==='/cart'" class="icon" src="./assets/icon/cart-checked.png" alt="购物车">
          <br/>购物车
        </router-link>
      </a-col>
      <a-col :span="8">
        <router-link :to="'/self'">
          <img v-if="this.$route.fullPath!=='/self'" class="icon" src="./assets/icon/self.png" alt="我的">
          <img v-if="this.$route.fullPath==='/self'" class="icon" src="./assets/icon/self-checked.png" alt="我的">
          <br/>我的
        </router-link>
      </a-col>
    </a-row>
    <router-view/>
  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$refs.demo.$el)
  },
  methods: {

  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .aRow{
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    border-top: solid 1px #ebebeb;
    font-size: 10px;
  }
  .aRow a{
    color: black;
  }
  .aRow a:focus{
    color: #1296db;
  }
  .icon{
    width: 24px;
    height: 24px;
    margin-top:5px ;
  }
</style>
