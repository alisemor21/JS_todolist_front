<template>
  <div class="all">
    <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
      <div class="form-field">
        <label for="email">Email</label>
        <input v-model="email" id="email" type="text" required />

        <label for="login">Логин</label>
        <input v-model="login" id="login" type="text" required />

        <label for="password">Пароль</label>
        <input v-model="password" id="password" type="password" required />
      </div>

      <div class="submit-btn">
        <button class="submitBtn" type="submit">Регистрация</button>
      </div>

      <div class="action-link">
        <span>Уже есть аккаунт? --> </span>
        <a @click="redirect" class="link-btn">Войти</a>
      </div>
    </form>
  </div>
</template>

<script>
import { doRegister } from "@/netClient/dataService";

export default {
  name: "RegistrationPage",
  data: () => ({
    email: "",
    login: "",
    password: "",
  }),
  components: {
    // Navbar
  },
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(),
          this.password.trim(),
          this.email.trim()
        );
        console.warn({ data });
      } catch (error) {
        console.error({ error });
      }

      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.all {
  /* margin-top: 200px;
  background-size: 50%;
  background-color: wheat;
  
  overflow-x: scroll; */
}

.registration-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1pc solid palevioletred;
  border-radius: 2pc;
  text-align: center;
  color: black;
  margin-left: 33%;
  padding: 1pc;
  background-color: powderblue;
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  box-shadow: rgb(185, 133, 151) 20px 20px 20px;
}

.form-field input {
  outline: none;
  border: 2px solid black;
  border-radius: 20px;
  /* margin: auto; */
}

.form-field {
  clear: both;
  text-align: right;
  line-height: 50px;
  float: center;
}
label {
  float: left;
  padding-right: 20px;
}

input {
  clear: both;
  width: 70%;
}

.form-field input:hover {
  border: 3px solid black;
}
.form-field input:focus {
  border: 3px solid palevioletred;
}

.submitBtn {
  text-align: center;
  height: 30px;
  width: 210px;
  border-radius: 20px;
  margin: 1pc;
  background-color: pink;
  border: 1px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
}

.submit-btn button:hover {
  border: 3px solid whitesmoke;
  background-color: palevioletred;
  color: whitesmoke;
  transform: scale(1.2, 1.2);
}
.submit-btn button:focus {
  border: 3px solid palevioletred;
}
</style>
