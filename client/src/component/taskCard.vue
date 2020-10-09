<template>
  <!-- <li class="list-task"> -->
  <div class="card card-task-list">
    <div class="card-header">
      <div class="content text-area card-header-title" readonly>
        {{ task.title }}
        <button @click="deleteTask" class="delete" aria-label="close"></button>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        {{ task.description }}
        <br />
      </div>
    </div>
    <footer class="card-footer">
      <div class='shrink1'>
        <button class="button w100 is-success is-outlined is-small">
          <img
            class="rotateimg180 arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button class="button w100 is-primary is-outlined is-small">Edit</button>
        <button class="button w100 is-danger is-outlined is-small">
          <img
            class="arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
      </div>
    </footer>
  </div>
  <!-- </li> -->
</template>

<script>
import axios from "../config/axios";
export default {
  props: {
    task: Object,
  },
  name: "task",
  data() {
    return {};
  },
  methods: {
    deleteTask() {
      axios({
        url: `/tasks/${this.task.id}`,
        method: "delete",
        headers: { token: localStorage.token },
      })
        .then((data) => {
          this.$emit("reFetch");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeCategory() {
      axios({
        url: `/tasks/${this.task.id}`,
        method: "patch",
        headers: { token: localStorage.token },
        data: {
          category: "",
        },
      })
        .then((data) => {
          this.$emit("reFetch");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>