<template>
  <div class="Set">
    <TopBar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Logout</button>
  
  </div>
</template>

<script>
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '@/components/TopBar.vue'


export default {
  name: 'set',
  components: {
    HelloWorld,
    TopBar,
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
