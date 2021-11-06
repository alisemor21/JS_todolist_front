<template>
  <div class="all">

    <router-link to="/spisok-del">
    Список дел<h1/>
    </router-link>

    <a/>||||<a/>

    <router-link to="/new">
    <h1/>NEW<h1/>
    </router-link>

    <a/>||||<a/>

    <router-link to="/info">
    <h1/>Информация<h1/>
    </router-link>





    <router-view/>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  },
};
</script>

<style>
.all {
  background-size: 50%;
  background-color: wheat;
  /*border: 1pc solid palevioletred;*/
  overflow-x: scroll;
}
.picture1 {
  margin: 1pc;
  border: 1pc solid palevioletred;
  border-radius: 2pc;
  background-color: pink;
  padding: 1pc;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.Information {
  margin-top: 100px;
}

.picture2 {
  margin: 1pc;
  border: 1pc solid palevioletred;
  border-radius: 2pc;
  background-color: pink;
  padding: 1pc;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.Cards {
  display: flex;
  flex-direction: row;
  margin: 250px;
}

.Card1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  /*text-decoration: blink;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1pc solid palevioletred;
  border-radius: 5pc;
  text-align: center;
  color: black;
  margin-top: 10px;
  margin: 20px;
  padding: 1pc;
  background-color: powderblue;
  width: 50%;
  box-shadow: rgb(185, 133, 151) 20px 20px 20px;
}

.Card2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  /*text-decoration: blink;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 1pc solid palevioletred;
  border-radius: 5pc;
  text-align: center;
  color: black;
  margin-top: 10px;
  margin: 20px;
  padding: 1pc;
  background-color: powderblue;
  width: 50%;
  box-shadow: rgb(185, 133, 151) 20px 20px 20px;
}

.Card1 img:hover{width: 300px;}

</style>
