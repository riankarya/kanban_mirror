<template>
  <section id="login-page" class="card logreg-page">
    <div class="card-content">
      <h1 class="is-size-3 has-text-weight-semibold">Log In</h1>
      <form onsubmit="login(event)">
        <label for="email">Email</label>
        <input
          v-model="email"
          class="input is-primary"
          id="login-email"
          type="text"
          name="email"
        />
        <br />
        <br />
        <label for="password">Password</label>
        <input
          v-model="password"
          class="input is-primary"
          id="login-password"
          type="password"
          name="password"
        />
        <br />
        <br />
        <button
          class="button is-info"
          @click.prevent="login"
          id="submit-login"
          type="submit"
        >
          Log In
        </button>
        <button
          class="button is-success"
          @click="goToRegister"
          id="go-to-register"
          type="button"
        >
          Register
        </button>
      </form>
      <b>Or, use another account!</b>
      <br />
      <button v-google-signin-button="clientId" class="google-signin-button">
        Continue with Google
      </button>
    </div>
  </section>
</template>

<script>
import axios from "../config/axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      clientId:
        "64684442308-kqngr6jc3ffkuvavubtq0rt5rb3bb6m5.apps.googleusercontent.com",
    };
  },
  methods: {
    goToRegister() {
      this.$emit("change_show", "register");
    },
    login() {
      axios({
        url: "/users/login",
        method: "post",
        data: { email: this.email, password: this.password },
      })
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("userId", data.data.id);
          this.$emit("change_show", "homepage");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    OnGoogleAuthSuccess(idToken) {
      axios({
        url: "/users/googleLogin",
        method: "post",
        data: {
          tokenGoogle: idToken,
        },
      })
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("userId", data.data.id);
          this.$emit("change_show", "homepage");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    OnGoogleAuthFail(error) {
      console.log(error, "error");
    },
    onSignIn(googleUser) {
      var tokenGoogle = googleUser.getAuthResponse().id_token;
      $.axios({
        url: baseUrl + "/users/googleLogin",
        method: "post",
        data: {
          tokenGoogle,
        },
      })
        .then((res) => {
          localStorage.setItem("token", res.token);
          localStorage.setItem("userId", data.data.id);
          this.$emit("change_show", "homepage");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>