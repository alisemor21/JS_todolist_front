<template>
  <div class="Card2">
    <div class="picture2">
      <img alt="Vue logo" src="../assets/kot2.jpg" style="width: 70%" />
    </div>

    <form>
      <div class="form-field">
        <div class="Name">
          <label for="name">* Name</label>
          <input type="text" id="name" required />
        </div>

        <div class="Email">
          <label for="Email">* Email</label>
          <input type="text" id="Email" required />
        </div>

        <div class="Comment">
          <label for="Comment">Comment</label>
          <textarea type="text" id="Comment" required />
        </div>
      </div>

      <div class="submit-btn">
        <button class="submitBtn">Submit</button>
      </div>
    </form>
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
.form-field input {
  outline: none;
  border: 2px solid black;
  border-radius: 20px;
  margin: auto;
}
.form-field textarea {
  outline: none;
  border-radius: 20px;
  border: 2px solid black;
  margin: auto;
}

.form-field {
  clear: both;
  text-align: right;
  line-height: 50px;
}
label {
  float: left;
  padding-right: 10px;
}
.form-field {
  float: left;
}

.form-field input:hover {
  border: 3px solid black;
}
.form-field input:focus {
  border: 3px solid palevioletred;
}
.form-field textarea:hover {
  border: 3px solid black;
}
.form-field textarea:focus {
  border: 3px solid palevioletred;
}

.Name input {
  clear: both;
  /* text-align:right; */
  margin: 10px;
  padding: 8px 72px;
}

.Email input {
  clear: both;
  margin: 10px;
  padding: 8px 72px;
}
.Comment textarea {
  clear: both;
  margin: 10px;
  padding: 80px 72px;
}

.submitBtn {
  text-align: center;
  height: 30px;
  width: 210px;
  border-radius: 20px;
  margin: 1pc;
  background-color: pink;
  border: 1px solid black;
  box-shadow: rgb(185, 133, 151) 2px 4px 20px;
}

.submit-btn button:hover {
  border: 3px solid whitesmoke;
  background-color: palevioletred;
  color: whitesmoke;
  transform: scale(1.2, 1.2);
}
.submit-btn button:focus {
  border: 3px solid palevioletred;
}

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
