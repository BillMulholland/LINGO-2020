<template>
  <div>
    <div class="menu bg-light">
      <TopBarLoggedOut />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-4 align-self-center">
          <div class="login ">
            <form>
              <h3>Sign In</h3>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="text"
                  v-model="email"
                  placeholder="Email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
                <br />
                <button type="button" class="btn btn-primary" @click="login">
                  Login to Linco
                </button>
                <br />
                <small
                  >You don't have an account ? You can
                  <router-link to="/sign-up">create one</router-link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import TopBarLoggedOut from "@/components/TopBarLoggedOut.vue";

export default {
  components: {
    TopBarLoggedOut
  },
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
