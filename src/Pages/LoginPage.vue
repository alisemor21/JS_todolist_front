<template>
  <form @submit.prevent="onFormSubmit" class="login-form auth-form">
    <div class="form-field">
      <label for="login">Логин</label>
      <input id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input id="password" type="password" required />
    </div>
    <button class="submit-btn" type="submit">Войти</button>
    <div class="action-link">
      <span>Нет аккаунта?</span>
      <a @click="redirect" class="link-btn">Зарегистрироваться</a>
    </div>
  </form>
</template>

<script>
// import Navbar from "@/components/Navbar";

export default {
  name: "LoginPage",
  components: {
    // Navbar
  },
  methods:{
      onFormSubmit(){
          this.$router.push('/')
      },
      redirect(){
          this.$router.push('/registration')
      }
  }
};
</script>

<style>
.all {
  margin-top: 200px;
  background-size: 50%;
  background-color: wheat;
  /*border: 1pc solid palevioletred;*/
  overflow-x: scroll;
}

p {
  margin: 1500px 0 0;
}
</style>
