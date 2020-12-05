<template>
  <!-- <li class="list-task"> -->
  <div class="card card-task-list">
    <div class="card-header">
      <div v-if="show == 'task'" class="content text-area card-header-title is-large" readonly>
        <b>{{ task.title }}</b>
        <button v-if="!authorizeEdit" @click="deleteTask" class="delete" aria-label="close"></button>
      </div>
      <div v-if="show == 'edit'" class="content text-area card-header-title" readonly>
        <input class='input' v-model="editTitle" type="text">
      </div>
    </div>
    <div class="card-content">
      <div v-if="show == 'task'" class="content text-area" readonly>
        <b>Description:</b>
        <br>{{ task.description }}
        <br />
      </div>
      <div v-if="show == 'edit'" class="content">
        <textarea class='textarea' v-model="editDescription" type="text"></textarea>
        <br />
      </div>
    </div>
    <div class="card-content">
      <div v-if="show == 'task'" class="content text-area" readonly>
        <b>Owner:</b>
        <br>{{ task.User.email }}
        <br />
      </div>
    </div>
    <footer class="card-footer">
      <div class='shrink1'>
        <button v-if="task.category == 'Back-Log'" disabled class="button w100 is-white is-fullwidth">
          <img
            class="rotateimg180 arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'To-Do'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('Back-Log')" class="button w100 is-white is-fullwidth">
          <img
            class="rotateimg180 arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'Doing'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('To-Do')" class="button w100 is-white is-fullwidth">
          <img
            class="rotateimg180 arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'Done'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('Doing')" class="button w100 is-white is-fullwidth">
          <img
            class="rotateimg180 arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button class="button w100 is-white is-fullwidth" :disabled='authorizeEdit' v-if="show == 'task'" @click="changeShow('edit')">Edit</button>
        <button class="button w100 is-white is-fullwidth" v-if="show == 'edit'" @click="editTask">Submit</button>
        <button v-if="task.category == 'Back-Log'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('To-Do')" class="button w100 is-white is-fullwidth">
          <img
            class="arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'To-Do'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('Doing')" class="button w100 is-white is-fullwidth">
          <img
            class="arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'Doing'" :disabled="show == 'edit' || authorizeEdit" @click="changeCategory('Done')" class="button w100 is-white is-fullwidth">
          <img
            class="arrow"
            src="https://icons-for-free.com/iconfiles/png/512/next+right+icon-1320166862802397293.png"
            alt=""
          />
        </button>
        <button v-if="task.category == 'Done'" disabled class="button w100 is-white is-fullwidth">
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
    return {
      show: 'task',
      editTitle: this.task.title,
      editDescription: this.task.description,
      authorizeEdit: this.task.UserId != +localStorage.getItem('userId')
    };
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
    changeCategory(newCategory) {
      axios({
        url: `/tasks/${this.task.id}`,
        method: "patch",
        headers: { token: localStorage.token },
        data: {
          category: newCategory,
        },
      })
        .then((data) => {
          this.$emit("reFetch");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editTask() {
      axios({
        url: `/tasks/${this.task.id}`,
        method: 'put',
        headers: {token: localStorage.token},
        data: {
          title: this.editTitle,
          description: this.editDescription 
        }
      })
      .then(data => {
        this.$emit('reFetch')
      })
      .catch(err => {
        console.log(err);
      })
    },
    changeShow(newShow) {
      this.show = newShow
    }
  },
};
</script>

<style>
</style>