<template>
  <div class="all">

  <div class="Navbar">
  <Navbar/>
  </div>

  <h1>MAIN!!!</h1>
  <p>SOME TEXT</p>

  </div>
</template>

<script>

import Navbar from "@/components/Navbar";


export default {
  name: "MainPage",
  components: {
    Navbar
  },
};
</script>

<style>

.all {
  margin-top: 100px ;
  background-size: 50%;
  background-color: wheat;
  /*border: 1pc solid palevioletred;*/
  overflow-x: scroll;
}

p {

  margin: 1500px 0 0;

}
</style>