<template>
  <div class="todo-widget">
    <h2>To Do List</h2>
    <div class="tasks">
      <div
          v-for="task in tasks"
          :key="task.id"
          class="task-item"
      >
        <span>{{ task.title }}</span>
        <button class="delete-btn" @click="removeTask(task.id)">X</button>
      </div>
    </div>
    <div class="add-task">
      <input
          type="text"
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add new task"
          class="task-input"
      />
      <button class="add-btn" @click="addTask">Add</button>
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
      if (this.newTask.trim() !== "") {
        this.tasks.push({
          id: this.nextTaskId++,
          title: this.newTask.trim()
        });
        this.newTask = ""; // Clear input field after adding the task
      }
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-widget {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 300px;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
    color: #333;
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
    }

    .add-btn {
      padding: 0.5rem;
      background-color: #fa9346;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: darken(#fa9346, 5%);
      }
    }
  }
}
</style>
