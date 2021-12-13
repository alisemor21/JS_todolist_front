<template>
  <div class="todo-item" :class="{ done: todo.isCompleted }">
    <div class="todo-text">
      <div class="checkbox">
        <input
          type="checkbox"
          :checked="todo.isCompleted"
          @input="onCheckBoxInput(todo.id, todo.isCompleted)"
        />
      </div>
      <div class="title">{{ todo.title }}</div>
    </div>
    <div class="delete-btn">
      <button
        @click="onDeleteTodoClicked(todo.id, todo.isCompleted)"
        class="deleteBtn"
      >
        Х
      </button>
    </div>
  </div>
</template>

<script>
import { deleteTodo, patchTodo } from "@/netClient/dataService";

export default {
  name: "TodoItem",
  data: () => ({}),
  props: ["todo"],
  methods: {
    async onDeleteTodoClicked(id) {
      try {
        await deleteTodo({ id });
        this.$emit("todo-deleted");
      } catch (error) {
        console.error({ error });
      }
    },

    async onCheckBoxInput(id, isCompleted) {
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        this.$emit("todo-done"); // this.fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped>
.todo-item {
  border: 3px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: pink;
}

.todo-item.done {
  opacity: 0.6;
  background-color: palevioletred;
}

.todo-item.done .title {
  text-decoration: line-through;
}

.todo-text {
  float: left;
  display: flex;
  flex-direction: row;
}

.deleteBtn {
  text-align: center;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background-color: palevioletred;
  border: 1px solid white;
  color: white;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  float: right;
  margin-right: 20px;
}

.delete-btn button:hover {
  border: 2px solid whitesmoke;
  background-color: palevioletred;
  color: whitesmoke;
  transform: scale(1.1, 1.1);
}
</style>
