<template>
  <div class="container mt-5 px-5 p header">
    <h1>Main Branch</h1>
    <div class="row">
      <h1>Monster Slayer</h1>
    </div>
    <div class="RedMonster">
      <h1>Red Monster</h1>
    </div>
    <div class="GreenMonster">
      <h1>Green Monster</h1>
    </div>
    <div class="BlueMonster">
      <h1>Blue Monster</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "monster-slayer",
  data() {},
};
</script>
<style scoped>
.header {
  background-color: rgb(5, 4, 4);
  border-style: outset;
  position: relative;
  text-align: center;
  color: aliceblue;
  padding-bottom: 1.5%;
}
.RedMonster {
  border-style: dashed;
  background-color: rgb(162, 44, 44);
  position: relative;
  text-align: center;
  color: aliceblue;
  padding-bottom: 1.5%;
}
.GreenMonster {
  border-style: dashed;
  background-color: rgb(10, 109, 41);
  position: relative;
  text-align: center;
  color: aliceblue;
  padding-bottom: 1.5%;
}
.BlueMonster{
  border-style: dashed;
  background-color: rgb(26, 40, 196);
  position: relative;
  text-align: center;
  color: aliceblue;
  padding-bottom: 1.5%;
}
.row {
  padding-top: -5%;
}
</style>
