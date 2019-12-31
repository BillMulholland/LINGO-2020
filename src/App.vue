<template>
<div id="app" class="container">
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <img alt="Vue logo" src="./assets/logo-linco.png"></div>
      <div class="col"></div>
  </div>

  <router-view />
</div>
<footer>
  Footer here
</footer/>
</template>

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

.container {padding-top:50px}

footer {background:red}
</style>
