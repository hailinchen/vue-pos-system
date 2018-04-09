<template>
  <div>
    <h2>{{msg}}</h2>
    页面不存在！
  </div>
</template>

<script>
  export default {
    name: 'error',
    data () {
        return {
            msg: 'Error:404'
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
