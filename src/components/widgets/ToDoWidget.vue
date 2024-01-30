<template>
  <!-- Todo Widget component -->
  <div class="todo-widget">
    <!-- Widget header -->
    <div class="widget-header">
      <!-- Widget title -->
      <h1 class="widget-title">today's task</h1>
      <!-- Task entry section -->
      <div class="task-entry">
        <!-- Action button -->
        <button
            class="action-btn"
            @click="handleTaskAction"
            :disabled="!currentTask.text && !currentTask.added"
        >
          <!-- Plus sign for adding a new task -->
          <span v-if="!currentTask.added">+</span>
          <!-- Empty circle for an added task -->
          <span v-else-if="!currentTask.finished" class="empty-circle"></span>
          <!-- Checkmark icon for a finished task -->
          <span v-else class="finished-icon">✓</span>
        </button>
        <!-- Task input field -->
        <input
            type="text"
            v-model="currentTask.text"
            placeholder="Enter your task"
            class="task-input"
            :class="{ 'task-added': currentTask.added }"
            :readonly="currentTask.added || currentTask.finished"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoWidget",
  data() {
    return {
      currentTask: { text: "", added: false, finished: false }, // Holds the current task data
    };
  },
  methods: {
    handleTaskAction() {
      // Function to handle the task actions based on the current state
      if (this.currentTask.added && !this.currentTask.finished) {
        // If an added task is not finished, mark it as finished
        this.currentTask.finished = true;
      } else if (this.currentTask.finished) {
        // If a finished task, reset the task state
        this.resetTask();
      } else if (this.currentTask.text.trim()) {
        // If a new task has text, mark it as added
        this.currentTask.added = true;
      }
    },
    resetTask() {
      // Function to reset the task state
      this.currentTask = { text: "", added: false, finished: false };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/styles";

.todo-widget {
  /* Widget container styles */
  @include widget-container;
  text-align: center;

  .widget-header {
    /* Widget header styles */
    position: relative;

    .widget-title {
      /* Widget title styles */
      text-align: left;
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
      flex-grow: 1;
      padding: 10px;
      border: 2px solid #ffffff;
      border-radius: 20px;
      font-size: 16px;
      transition: all 0.3s ease;
      color: #333333;

      &.task-added {
        /* Task input field styles when a task is added */
        background-color: #ffffff;
        color: #333333;
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
