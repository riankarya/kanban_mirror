<template>
  <section id="home-page">
    <div id="navbar">
      <button
        class="button is-link is-focused"
        @click="addTaskForm"
        id="addtask-show-form"
      >
        Add To Do
      </button>
      <h1 class="is-size-3 has-text-weight-semibold">Your Lists</h1>

      <button @click="logout" class="button is-danger is-focused">
        Log Out
      </button>
    </div>
    <div id="container-task">
      <Category
        title="Back-Log"
        buttonColor="is-primary"
        :tasks="backLog"
        @reFetch="reFetch"
      ></Category>
      <Category
        title="To-Do"
        buttonColor="is-link"
        :tasks="toDo"
        @reFetch="reFetch"
      ></Category>
      <Category
        title="Doing"
        buttonColor="is-info"
        :tasks="doing"
        @reFetch="reFetch"
      ></Category>
      <Category
        title="Done"
        buttonColor="is-success"
        :tasks="done"
        @reFetch="reFetch"
      ></Category>
    </div>
  </section>
</template>

<script>
import Category from "../component/categoryCard";
export default {
  name: "homepage",
  components: {
    Category,
  },
  data() {
    return {
      backLog: [],
      toDo: [],
      doing: [],
      done: [],
    };
  },
  methods: {
    logout() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
      localStorage.clear();
      this.$emit("change_show", "login");
    },
    allTasks() {
      this.$emit("all_task")
    },
    addTaskForm() {
      this.$emit("change_show", "addtaskform");
    },
    reFetch() {
      this.backLog = [];
      this.toDo = [];
      this.doing = [];
      this.done = [];
      this.allTasks();
    },
  },
  mounted: function () {
    this.allTasks();
  },
};
</script>

<style>
</style>