<template>
  <div class="navbar">
  <!-- <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a> -->

    <router-link to="/">
    <h1/>ГЛАВНАЯ<h1/>
    </router-link>

    <router-link to="/info">
    <h1/>ИНФОРМАЦИЯ<h1/>
    </router-link>

    <router-link to="/spisok-del">
    <h1/>СПИСОК ДЕЛ<h1/>
    </router-link>

    <router-view/>

</div>


</template>

<style scoped>
.navbar {
  /* overflow: hidden; */
  background-color: #333;
  position: fixed; 
  top: 0; 
  width: 100%; 
  box-shadow: rgb(185, 133, 151) -10px 20px 40px;
  /* z-index: 100; */
}

.navbar a{
  float: left;
  display: block;
  color:palevioletred;          /*#f2f2f2;*/
  text-align: center;
  padding: 24px 16px;
  text-decoration: none;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }


.navbar a:hover{
  background: powderblue;
  color: black;
}

.navbar a:focus{
  background-color: palevioletred;
  color:black
}

.navbar a:after{
  background-color: blue;
}

.navbar a:active{
  background-color: whitesmoke;
}



/* .navbar :target{
  background-color: rgb(89, 71, 255);
} */

</style>