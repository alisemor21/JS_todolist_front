<template>
  <div class="all">

    <!-- <div class="Navbar">
    <Navbar/>
    </div> -->

    <div class="Cards">
      <InfoCard msg="Карточка №1" />
      <FormCard msg="Карточка №2" />
    </div>

  </div>
</template>
<script>
import InfoCard from "@/components/InfoCard";
import FormCard from "@/components/FormCard";
// import Navbar from "@/components/Navbar";


export default {
  name: "InfoPage",
  components: {
    InfoCard,
    FormCard,
    // Navbar
  },
};
</script>

<style>
.all {
  background-size: 50%;
  background-color: wheat;
  overflow-x: scroll;
}


.Cards {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-top: 10%;
  margin-left: 15%; 
  width: 70%;             
}


</style>

