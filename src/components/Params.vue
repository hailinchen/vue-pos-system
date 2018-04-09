<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newsId: {{$route.params.newsId}}</p>
    <p>newsTitle: {{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
    data () {
        return {
            msg: 'params pages'
        }
    },
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入 params 路由模板");
      console.log(to);
      console.log(from);
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开 params 路由模板");
      next();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
