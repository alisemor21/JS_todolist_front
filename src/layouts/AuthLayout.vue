<template>
  <div class="auth-layout">
    <h2 class="page-title"></h2>
     <!-- {{$route.meta.title}} -->
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped>
.auth-layout{
  /* width: 100%;
  max-width: 500px; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bolder;
  color:black;
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

}

.page-container{
    width:100%;

}


</style>
