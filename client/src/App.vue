<template>
  <section>
    <Register v-if="show == 'register'" @change_show="changeShow"></Register>
    <Login v-else-if="show == 'login'" @change_show="changeShow"></Login>
    <HomePage
      v-else-if="show == 'homepage'"
      @change_show="changeShow"
      @all_task="allTask"
    ></HomePage>
    <AddTaskForm
      v-else-if="show == 'addtaskform'"
      @change_show="changeShow"
    ></AddTaskForm>
  </section>
</template>

<script>
import axios from "../config/axios";
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
      this.show = page;
    },
    allTasks() {
      axios({
        url: "/tasks",
        method: "get",
        headers: { token: localStorage.token },
      })
        .then((data) => {
          data.data.data.forEach((element) => {
            if (element.category == "Back-Log") {
              this.backLog.push(element);
            } else if (element.category == "To-Do") {
              this.toDo.push(element);
            } else if (element.category == "Doing") {
              this.doing.push(element);
            } else if (element.category == "Done") {
              this.done.push(element);
            }
          });
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  },
  mounted: function () {
    if (localStorage.token) {
      this.changeShow("homepage");
    }
  },
};
</script>

<style>
</style>