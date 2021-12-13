<template>
  <div class="Navbar">
    
    <div class="Main">
      <router-link to="/">
        <h1 />
        ГЛАВНАЯ
        <h1 />
      </router-link>
    </div>

    <router-link to="/info">
      <h1 />
      ИНФОРМАЦИЯ
      <h1 />
    </router-link>

    <router-link to="/achievements">
      <h1 />
      ACHIEVEMENTS
      <h1 />
    </router-link>

    <router-link to="/awards">
      <h1 />
      AWARDS
      <h1 />
    </router-link>


    <button @click="onLogoutClicked" class="logout-nav-link"> Выйти</button>
   

  </div>
</template>

<script>
import { doLogout } from "@/netClient/authService";

export default {
  name: "NavBar",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped>
.Navbar {
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: rgb(185, 133, 151) -10px 20px 40px;
  z-index: 1;
}

.Navbar .Main a {
  background: pink;
  color: rgb(27, 27, 27);
}


.Navbar a {
  float: left;
  display: block;
  color: palevioletred;
  text-align: center;
  padding: 24px 16px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.logout-nav-link {
  float: right;
  text-align: center;
  height: 50px;
  width: 180px;
  border-radius: 20px;
  margin-top: 29px;
  margin-right: 50px;
  background-color: pink;
  border: 1px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
  text-decoration: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.Navbar a:hover {
  background: powderblue;
  color: black;
}

a.router-link-exact-active {
  background-color: rgb(27, 27, 27);

  color: whitesmoke;
}

.router-link-active {
  background-color: rgb(27, 27, 27);
  color: whitesmoke;
}
</style>
