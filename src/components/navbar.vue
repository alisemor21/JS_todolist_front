<template>
  <div class="Navbar">

    <div class="Main">
    <router-link to="/">
    <h1/>ГЛАВНАЯ<h1/>
    </router-link>
    </div>

    <router-link to="/info">
    <h1/>ИНФОРМАЦИЯ<h1/>
    </router-link>

    <router-link to="/spisok-del">
    <h1/>СПИСОК ДЕЛ<h1/>
    </router-link>

  </div>

</template>


<style scoped>
.Navbar {
  /* overflow: hidden; */
  background-color: #333;
  position: fixed; 
  top: 0; 
  width: 100%; 
  box-shadow: rgb(185, 133, 151) -10px 20px 40px;
  /* z-index: 100; */
}

.Navbar .Main a{
  background: pink;
  color: rgb(27, 27, 27);
}

.Navbar a{
  float: left;
  display: block;
  color:palevioletred;
  text-align: center;
  padding: 24px 16px;
  text-decoration: none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

.Navbar a:hover{
  background: powderblue;
  color: black;
}

a.router-link-exact-active{
  background-color: rgb(27, 27, 27);
  color: whitesmoke;
}

.router-link-active{
  background-color: rgb(27, 27, 27);
  color: whitesmoke;
}

</style>