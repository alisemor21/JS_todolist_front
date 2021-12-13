<template>
  <div class="all">
    <section class="create-todo">
      <CreateTodo @todo-created ="onTodoCreated"/>
    </section>

    <section class="todo-list">
        <TodoItem v-for="todoItem in todoList" :key="todoItem.id"
          :todo = "todoItem" @todo-deleted ="fetchTodoList" @todo-done="fetchTodoList"/>
    </section>

    <p>SOME TEXT</p>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";

import { fetchTodoList } from "@/netClient/dataService";

export default {
  name: "MainPage",
  components:{
    CreateTodo,
    TodoItem,
  },
  data: () => ({
    todoList: [],
  }),
  created() {
    this.fetchTodoList();
  },
  methods: {
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },

    onTodoCreated(){

      this.fetchTodoList();
    },

    
  },
};
</script>

<style>
.all {
  margin-top: 100px;
  background-size: 50%;
  background-color: wheat;
  overflow-x: scroll;
}

.create-todo {
  width: 50%;
  margin-top: 5%;
  margin-left: 20%;
  text-align: center;
}

.todo-list {
  width: 50%;
  margin-top: 5%;
  margin-left: 20%;
  text-align: center;
}
li {
  list-style-type: none;
}
.li {
  display: flex;
  flex-direction: row;
  text-align: center;
}
/* ::marker {
  visibility: hidden;
} */

/* .todo {
  border: 3px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  border-radius: 20px;
  margin-top: 10px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: pink;

}

.todo-text {
  float: left;
  display: flex;
  flex-direction: row;
}

.deleteBtn {
  text-align: center;
  height: 25px;
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
} */

p {
  margin: 1500px 0 0;
}
</style>
