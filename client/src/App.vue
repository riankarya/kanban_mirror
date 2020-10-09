<template>
  <section>
    <h1>halo dunia</h1>
    <Register v-if="show == 'register'" @change_show="changeShow"></Register>
    <Login v-else-if="show == 'login'" @change_show="changeShow"></Login>
    <HomePage
      v-else-if="show == 'homepage'"
      @change_show="changeShow"
    ></HomePage>
    <AddTaskForm
      v-else-if="show == 'addtaskform'"
      @change_show="changeShow"
    ></AddTaskForm>
  </section>
</template>

<script>
import Login from "./views/Login";
import Register from "./views/Register";
import HomePage from "./views/HomePage";
import AddTaskForm from "./views/AddTaskForm";
export default {
  name: "root",
  components: {
    Login,
    Register,
    HomePage,
    AddTaskForm,
  },
  data() {
    return {
      show: "login",
    };
  },
  methods: {
    changeShow(page) {
      console.log(page, "asupp ti app.vue");
      this.show = page;
    },
  },
  mounted: function () {
    console.log("asup ti mounted");
    if (localStorage.token) {
      this.changeShow("homepage");
    }
  },
};
</script>

<style>
</style>