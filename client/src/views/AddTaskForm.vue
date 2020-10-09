<template>
  <section id="addtask-page" class="control card">
    <div class="card-content">
      <h1 class="is-size-3 has-text-weight-semibold">Add To Do</h1>
      <form @submit.prevent="addTask">
        <label for="title">Title</label>
        <input
          v-model="title"
          type="text"
          class="control input is-primary"
          id="add-title"
          placeholder="Insert Title"
        />
        <br /><br />
        <label for="description">Description</label>
        <input
          v-model="description"
          type="text"
          class="control input is-primary"
          id="add-description"
          placeholder="Insert Description"
        />
        <br /><br />
        <label for="category">Category</label>
        <div class="field">
          <div class="control">
            <div class="select is-primary">
              <select v-model="category" id="add-category">
                <option value="Back-Log">Back-Log</option>
                <option value="To-Do">To-Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <button class="button is-info" id="submit-addtask" type="submit">
          Submit
        </button>
      </form>
      <button class="button is-primary" onclick="checkLogin()" type="button">
        Home Page
      </button>
    </div>
  </section>
</template>

<script>
import axios from "../config/axios";
export default {
  name: "addtaskform",
  data() {
    return {
      title: "",
      description: "",
      category: "",
    };
  },
  methods: {
    addTask() {
      axios({
        url: '/tasks',
        method: 'post',
        headers: {token: localStorage.token},
        data: {title: this.title, description: this.description, category: this.category}
      })
      .then(data => {
        this.$emit('change_show', 'homepage')
      })
      .catch(err => {
        console.log(err);
      })
    },
  },
};
</script>

<style>
</style>