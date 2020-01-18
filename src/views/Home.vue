<template>
  <div class="home">
   <TopBar />
   <div class="container">
    <h1>Welcome to Linco</h1>
    
  </div>
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '@/components/TopBar.vue'


export default {
  name: 'home',
  components: {
  ///  HelloWorld,
    TopBar
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
