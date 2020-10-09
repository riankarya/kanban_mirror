<template>
  <section id='register-page' class='card logreg-page'>
    <div class='card-content'>
      <h1 class='is-size-3 has-text-weight-semibold'>Register</h1>
      <form onsubmit='register(event)' id="register">
        <label for="email">Email</label>
        <input v-model="email" class="input is-primary" id="register-email" type="text" name="email">
        <br>
        <br>
        <label for="password">Password</label>
        <input v-model="password" class="input is-primary" id="register-password" type="password" name="password">
        <br>
        <br>
        <button class="button is-info" @click.prevent="register" id="submit-register" type="submit">Register</button>
        <button class="button is-success" @click="goToLogin" id="go-to-login" type="button">Log In</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from '../config/axios'
export default {
    name: 'register',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      goToLogin() {
        this.$emit('change_show', 'login')
      },
      register() {
        console.log(this.email, this.password, 'asup ti register');
        axios({
          url: '/users/register',
          method: 'post',
          data: {email: this.email, password: this.password}
        })
        .then(data => {
          this.goToLogin()
        })
        .catch(err => {
          console.log(err.response, 'asup ti catch');
        })
      }
    }
}
</script>

<style>

</style>