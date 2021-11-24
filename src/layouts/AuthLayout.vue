<template>
  <div class="auth-layout">
    <h2 class="page-title"></h2>
     {{$route.meta.title}}

    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthLayout",
  components: {
  
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
