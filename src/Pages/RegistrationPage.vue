<template>
  <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
    <div class="all">
      <div class="form-field">
        <label for="email">Email</label>
        <input v-model="email" id="email" type="text" required />

        <label for="login">Логин</label>
        <input v-model="login" id="login" type="text" required />

        <label for="password">Пароль</label>
        <input v-model="password" id="password" type="password" required />
      </div>

      <button class="submit-btn" type="submit">Регистрация</button>
       <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <a @click="redirect" class="link-btn">Войти</a>
    </div>
    </div>
  </form>
</template>

<script>
import {doRegister} from '@/netClient/dataService';

export default {
  name: "RegistrationPage",
  data:() =>({
      email:'',
      login:'',
      password:'',
  }),
  components: {
    // Navbar
  },
  methods:{
      async onFormSubmit(){

          try{
              const data = await doRegister(this.login.trim(), this.password.trim(), this.email.trim());
              console.warn({data});
          }catch(error){
              console.error({error})
          }

          this.$router.push('/login')
      },
      redirect(){
          this.$router.push('/login')
      }
  }
};
</script>

<style>
.all {
  margin-top: 200px;
  background-size: 50%;
  background-color: wheat;
  
  overflow-x: scroll;
}

p {
  margin: 1500px 0 0;
}
</style>
