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
    <!-- <div>
      <div class="columns">
        <div class="column">
          <p>First column</p>
          <ul class="fixed-content hidden-scrollbar task-container belum">
          <Task @reFetch="reFetch" v-for="task in toDo" :key="task.id" :task='task'></Task>
          </ul>
        </div>
        <div class="column">
          Second column
          <ul class="fixed-content hidden-scrollbar task-container lagi">
            <Task @reFetch="reFetch" v-for="task in onProgress" :key="task.id" :task='task'></Task>
          </ul>
        </div>
        <div class="column">
          Third column
          <ul class="fixed-content hidden-scrollbar task-container udah">
            <Task @reFetch="reFetch" v-for="task in done" :key="task.id" :task='task'></Task>
          </ul>
        </div>
        <div id="weather"></div>
      </div>
    </div> -->
    <div id="container-task">
      <div class="tasks-categories">
        <div class="tasks-category button is-warning is-fullwidth">
          Back-Log
        </div>
        <div class="fixed-content hidden-scrollbar">
          <Task @reFetch="reFetch" v-for="task in backLog" :key="task.id" :task='task'></Task>
        </div>
      </div>

      <div class="tasks-categories" >
        <div class="tasks-category">
          To-Do
        </div>
        <div class="fixed-content hidden-scrollbar">
          <Task @reFetch="reFetch" v-for="task in toDo" :key="task.id" :task='task'></Task>
        </div>
      </div>

      <div class="tasks-categories" >
        <div class="tasks-category">
          Doing
        </div>
        <div class="fixed-content hidden-scrollbar">
          <Task @reFetch="reFetch" v-for="task in doing" :key="task.id" :task='task'></Task>
        </div>
      </div>

      <div class="tasks-categories" >
        <div class="tasks-category">
          Done
        </div>
        <div class="fixed-content hidden-scrollbar">
          <Task @reFetch="reFetch" v-for="task in done" :key="task.id" :task='task'></Task>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../config/axios";
import Task from "../component/taskCard"
export default {
  name: "homepage",
  components: {
    Task
  },
  data() {
    return {
      backLog: [],
      toDo: [],
      doing: [],
      done: []
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$emit("change_show", "login");
    },
    allTasks() {
      console.log("asup ti all task");
      axios({
        url: "/tasks",
        method: "get",
        headers: { token: localStorage.token },
      })
        .then((data) => {
          console.log(data.data, 'asup ti then');
          data.data.data.forEach(element => {
            if(element.category == 'Back-Log') {
              this.backLog.push(element)
            }else if(element.category == 'To-Do') {
              this.toDo.push(element)
            }else if(element.category == 'Doing') {
              this.doing.push(element)
            } else if (element.category == 'Done') {
              this.done.push(element)
            }
          })
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    addTaskForm() {
      this.$emit("change_show", "addtaskform");
    },
    reFetch() {
      this.backLog = []
      this.toDo = []
      this.doing = []
      this.done = []
      this.allTasks()
    }
  },
  mounted: function () {
    console.log("asup ti mounted homepage");
    this.allTasks();
  },
};
</script>

<style>
</style>