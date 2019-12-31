import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyBXwo9D5d-jtqKXpTXhCAjhIQLSYg1-hnI",
      authDomain: "linco-lingo-2020.firebaseapp.com",
      databaseURL: "https://linco-lingo-2020.firebaseio.com",
      projectId: "linco-lingo-2020",
      storageBucket: "linco-lingo-2020.appspot.com",
      messagingSenderId: "891655828483",
      appId: "1:891655828483:web:8cf2e328cc6c348b86ca36",
      measurementId: "G-BZC940XR78"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
