<template>
  <!-- To Do List Widget component -->
  <div class="todo-widget">
    <h2>To Do List</h2>
    <div class="tasks">
      <!-- Display tasks using v-for -->
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <span>{{ task.title }}</span>
        <button class="delete-btn" @click="removeTask(task.id)">X</button>
      </div>
    </div>
    <div class="add-task">
      <!-- Input field to add new tasks -->
      <label for="new-task-input" class="visually-hidden">New Task</label>
      <input
          id="new-task-input"
          type="text"
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add new task"
          class="task-input"
          name="newTask"
      />
      <!-- Button to add new tasks -->
      <button class="add-btn" @click="addTask">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoWidget",
  data() {
    return {
      newTask: "",
      tasks: [],
      nextTaskId: 1
    };
  },
  methods: {
    addTask() {
      // Add a new task if input is not empty
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          id: this.nextTaskId++,
          title: this.newTask.trim()
        });
        this.newTask = ""; // Clear input field after adding the task
      }
    },
    removeTask(taskId) {
      // Remove a task by filtering out tasks with the given ID
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-widget {
  background-color: #ffffffa1;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 100%;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
    font-size: 18px;
  }

  .tasks {
    margin-bottom: 1rem;

    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      background-color: #ff9a6c38;
      border-radius: 4px;

      .delete-btn {
        cursor: pointer;
        background: none;
        border: none;
        color: #888;
        font-weight: bold;
      }

      .delete-btn:hover {
        color: red;
      }
    }
  }

  .add-task {
    display: flex;

    .task-input {
      flex-grow: 1;
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 0.5rem;
      background-color: #ffffffa1;
      margin-top: 15px;
    }

    .add-btn {
      padding: 0.5rem;
      background-color: #fa9346e0;
      color: #ffffff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 15px;

      &:hover {
        background-color: darken(#fa9346e0, 5%);
      }
    }
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }

  }
}
</style>
