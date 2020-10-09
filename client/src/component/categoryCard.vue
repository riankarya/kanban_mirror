<template>
  <div class="tasks-categories">
    <div class="tasks-category button is-fullwidth" :class='buttonColor'>{{ title }}</div>
    <div class="fixed-content hidden-scrollbar">
      <Task
        @reFetch="reFetch"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      ></Task>
    </div>
  </div>
</template>

<script>
import Task from "./taskCard"
export default {
  props: {
    tasks: Array,
    buttonColor: String,
    title: String
  },
  name: 'category',
  components: {
    Task
  },
  methods: {
    reFetch() {
      this.$emit('reFetch')
    }
  }
};
</script>

<style>
</style>