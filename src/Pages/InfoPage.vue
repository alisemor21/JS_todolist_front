<template>
  <div class="all">
    <div class="Cards">
      <Card1 msg="Карточка №1" />
      <Card2 msg="Карточка №2" />
    </div>
  </div>
</template>
<script>
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";

export default {
  name: "InfoPage",
  components: {
    Card1,
    Card2,
  },
};
</script>
