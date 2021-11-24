<template>
  <div class="main-layout">
      <Navbar/>
    <h2 class="page-title"></h2>
    {{$route.meta.title}}

    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "MainLayout",
  components: {
    Navbar
  },
};
</script>

<style scoped>
.auth-layout {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>
