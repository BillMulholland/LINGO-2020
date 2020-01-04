<template>
<div id="app">
  <div id="main_content" class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <img alt="Vue logo" src="./assets/logo-linco.png"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
  <FooterItems />
</div>
</template>
<script>
import FooterItems from './components/FooterItems.vue'
export default {
  components: {
    FooterItems
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.container {}
#main_content {
  min-height: 80vh
}
footer {
  min-height: 20vh;
  background: #CAE4DB
}
.logo {
  margin: 10px auto
}
</style>
