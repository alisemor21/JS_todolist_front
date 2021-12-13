<template>
  <div class="createTodoForm">
    <div class="create-todo-form">
      <div class="text">
        <label for="title">Новое задание</label>
        <input v-model="title" id="title" type="text" required />
      </div>

      <div class="submit-btn">
        <button @click="onCreateTodoClicked" class="submitBtn">Создать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createTodo } from "@/netClient/dataService";

export default {
  name: "CreateTodo",
  data: () => ({
    title: "",
  }),

  methods: {
    async onCreateTodoClicked() {
      try {
        const newTodo = await createTodo(this.title);
        if (newTodo) {
          this.title = "";
        }
        this.$emit("todo-created");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped>
.create-todo-form {
  border: 3px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: pink;
  padding-bottom: 50px;
}

.text input {
  outline: none;
  border: 2px solid black;
  border-radius: 20px;
  margin-left: 10px;
  width: 100%;
}
.text {
  float: left;
  display: flex;
  flex-direction: row;
  width: 75%;
}
.submitBtn {
  text-align: center;
  /* height: 30px;
  width: 80px; */
  height: 35px;
  width: 20%;

  border-radius: 20px;
  background-color: palevioletred;
  border: 1px solid white;
  color: white;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  float: right;
  
}

.submit-btn button:hover {
  border: 2px solid whitesmoke;
  background-color: palevioletred;
  color: whitesmoke;
  transform: scale(1.1, 1.1);
}
</style>
