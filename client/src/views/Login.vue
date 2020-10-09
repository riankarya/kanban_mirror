<template>
  <section id='login-page' class='card logreg-page'>
    <div class='card-content'>
      <h1 class='is-size-3 has-text-weight-semibold'>Log In</h1>
      <form onsubmit="login(event)">
        <label for="email">Email</label>
        <input v-model="email" class="input is-primary" id="login-email" type="text" name="email">
        <br>
        <br>
        <label for="password">Password</label>
        <input v-model="password" class="input is-primary" id="login-password" type="password" name="password">
        <br>
        <br>
        <button class="button is-info" @click.prevent="login" id="submit-login" type="submit">Log In</button>
        <button class="button is-success" @click="goToRegister" id="go-to-register" type="button">Register</button>
      </form>
      <b>Or, use another account!</b>
      <br>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  </section>
</template>

<script>
import axios from '../config/axios'
export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      goToRegister() {
        this.$emit('change_show', 'register')
      },
      login() {
        axios({
          url: '/users/login',
          method: 'post',
          data: {email: this.email, password: this.password}
        })
        .then(data => {
          console.log(data.data);
          localStorage.setItem('token', data.data.token)
          this.$emit('change_show', 'homepage')
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
}
</script>

<style>

</style>