<template>
  <div class="Card1">
    <div class="picture1">
      <img alt="Vue logo" src="../assets/kot.jpeg" style="width: 90%" />
    </div>
    <div class="Information">
      <h2>Морозова Алиса</h2>
      <h2>Группа: БСБО-05-19</h2>
      <h2>Скиллы и умения: love cats</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    const submitBnt = document.querySelector("#submitBtn");
    submitBnt.addEventListener("click", ($event) => {
      console.warn($event);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .form-field input{
  outline: none;
  border: 2px solid black;
  border-radius: 20px;
  padding: 8px 12px;
}
.submitBtn{
  text-align:center;
  height: 30px;
  width: 100px;
  border-radius: 20px;
  margin: 1pc;
  } */

/* .form-field input:hover{ border: 2px solid rgb(91, 102, 73);}
.form-field input:focus{border: 2px solid greenyellow;} */

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
