<template>
  <div id="app">

    <leftNav></leftNav>

    <div class="main">
       <router-view></router-view>
    </div>
    

    <!-- <img src="./assets/logo.png"><br/>
    <i class="icon iconfont icon-hanbao"></i>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/65/jspang">Params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/I_like_you">goParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/jspang">jspang</router-link> |
    <router-link to="/4545">我是瞎写的</router-link> | 

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>  -->


  </div>
</template>

<script>
  import leftNav from '@/components/common/leftNav'
  export default {
    name: 'App',
    components: {
      leftNav
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      goForward() {
        this.$router.go(1);
      },
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main {
    float: left;
    width: 95%;
    /* background-color: rgb(34, 104, 224); */
  }




  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
