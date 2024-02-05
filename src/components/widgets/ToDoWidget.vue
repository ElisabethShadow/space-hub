<template>
  <div class="todo-widget">
    <div class="widget-header">
      <h1 class="widget-title">Today's Tasks</h1>
      <div class="task-entry" v-for="(task, index) in tasks" :key="index">
        <button class="action-btn" @click="handleTaskAction(index)" :disabled="!task.text && !task.added">
          <span v-if="!task.added">+</span>
          <span v-else-if="!task.finished" class="empty-circle"></span>
          <span v-else class="finished-icon">✓</span>
        </button>
        <input type="text" v-model="task.text" placeholder="Enter your task" class="task-input" :class="{ 'task-added': task.added }" :readonly="task.added || task.finished"/>
      </div>
      <button class="add-task-btn" @click="addNewTask">Add Task</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "TodoWidget",
  data() {
    return {
      tasks: [{ text: "", added: false, finished: false }],
    };
  },
  methods: {
    handleTaskAction(index) {
      const task = this.tasks[index];
      if (!task.added && task.text.trim()) {
        // Directly update the task object at the specified index
        this.tasks[index] = { ...task, added: true };
      } else if (task.added && !task.finished) {
        // Directly update the task object at the specified index
        this.tasks[index] = { ...task, finished: true };
      }
      // Vue 3's reactivity system will react to these changes automatically
    },
    addNewTask() {
      this.tasks.push({ text: "", added: false, finished: false });
    },
  },
};
</script>




<style scoped lang="scss">
@import "@/assets/scss/mixins.scss";

.todo-widget {
  /* Widget container styles */
  //@include widget-container;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffffbf;
  width: fit-content;
  border-radius: 5px;


  .widget-header {
    /* Widget header styles */
    position: relative;

    .widget-title {
      /* Widget title styles */
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      text-align: center;
    }

    .task-entry {
      /* Task entry section styles */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    .task-input {
      /* Task input field styles */

      padding: 10px;
      border: 2px solid #ffffffbf;
      font-size: 16px;
      transition: all 0.3s ease;
      color: #333333;

      &.task-added {
        /* Task input field styles when a task is added */
        background-color: #ffffffbf;
        color: #333333;
      }
    }

    .add-task-btn {

      margin-top: 10px;
      background-color: #ef7434cf;
      color: #fff;
      border: 2px solid #ffffffbf;
      padding: 10px 50px;
      font-size: 16px;
      cursor: pointer;


      &:hover {
        background-color: darken(#f0f0f0, 10%);
      }
    }


    .action-btn {
      /* Action button styles */
      background-color: transparent;
      border: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #333333;
      font-size: 24px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover:not(:disabled) {
        /* Action button styles on hover */
        color: darken(#7f8c8d, 10%);
      }

      &:disabled {
        /* Action button styles when disabled */
        color: #ccc;
        cursor: not-allowed;
      }
    }

    .empty-circle {
      /* Empty circle styles */
      width: 15px;
      height: 15px;
      border: 2px solid currentColor;
      border-radius: 50%;
      display: inline-block;
    }

    .finished-icon {
      /* Finished icon styles */
      color: #333333;
    }
  }
}
</style>
