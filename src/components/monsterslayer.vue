<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-danger text-white text-center monsterslayerDiv py-5">
        Monster Slayer
      </h1>
      <div class="col-12 monsterhealthDiv text-center border rounded">
        <h4>Monster Health </h4>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: monsterprogress + '%'}"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          
        </div>
      </div>
      <div class="col-12 yourhealthDiv text-center border rounded">
        <h4>Your Health</h4>
        <div class="progress progressbar">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: playerprogress + '%'}"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <div class="buttonDiv">
        <button type="button" class="btn butn" @click="attack">Attack</button>
        <button type="button" class="btn butn" @click="specialAttack">Special Attack</button>
        <br />
        <button type="button" class="btn butn" @click="heal">Heal</button>
        <button type="button" class="btn butn" @click="surrender">
          Surrender
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {ref} from "vue"
export default {
  name: "monster-slayer",
  setup() {
    let monsterprogress = ref(100);
    let playerprogress = ref(100);


    function attack(){
      monsterprogress.value = monsterprogress.value - 20;
      playerprogress.value = Math.floor(Math.random() * playerprogress.value);
      // progress.value = Math.floor(Math.random() * 100);
    }

    function heal(){
      playerprogress.value = playerprogress.value + 50
    }
    function specialAttack(){
      monsterprogress.value = monsterprogress.value - monsterprogress.value
      if(monsterprogress.value == 0){
        alert("Monster Died")
      }
    }

    function surrender() {
      alert("you surrender");
    }
    return {
      monsterprogress,
      playerprogress,
      surrender,
      attack,
      specialAttack,
      heal,
    };
  },
};
</script>
<style src="../assets/css/style.css"></style>
