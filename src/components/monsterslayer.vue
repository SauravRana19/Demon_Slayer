<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-danger text-white text-center monsterslayerDiv py-5">
        Monster Slayer
      </h1>
      <div class="col-12 monsterhealthDiv text-center border rounded">
        <h3 class="heading" >Monster Health</h3>
        <div class="progress">
          <div
            class="progress-bar bg-success progress-bar-animated"
            role="progressbar"
            :style="{ width: monsterprogress + '%' }"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div class="col-12 yourhealthDiv text-center border rounded">
        <h3 class="heading" >Your Health</h3>
        <div class="progress progressbar progress-bar-animated">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: playerprogress + '%' }"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <div v-show="btndiv" class="buttonDiv">
        <button type="button" class="btn butn" @click="attack">Attack</button>
        <button type="button" class="btn butn" @click="specialAttack">
          Special Attack
        </button>
        <br />
        <button type="button" class="btn butn" @click="heal">Heal</button>
        <button type="button" class="btn butn" @click="surrender">
          Surrender
        </button>
      </div>
      <div v-show="satrtagaindiv" class="buttonDiv">
        <h1>start again</h1>
        <button type="button" class="btn butn" @click="startAgain">
          startAgain
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "vue";
export default {
  name: "monster-slayer",
  setup() {
    let monsterprogress = ref(100);
    let playerprogress = ref(100);
    let btndiv = ref(true);
    let satrtagaindiv = ref(false);

    watch(() => {
      return divchange(monsterprogress.value);
    });
    function attack() {
      monsterprogress.value = monsterprogress.value - 20;
      playerprogress.value = Math.floor(Math.random() * playerprogress.value);
      // progress.value = Math.floor(Math.random() * 100);
    }

    function heal() {
      playerprogress.value = playerprogress.value + 50;
    }
    function specialAttack() {
      monsterprogress.value = monsterprogress.value - monsterprogress.value;
      alert("Monster Died");
    }

    function surrender() {
      alert("you surrender");
    }
    function divchange(value) {
      if (value == 0) {
        btndiv.value = false;
        satrtagaindiv.value = true;
      }
    }
    function startAgain() {
      monsterprogress.value = 100;
      playerprogress.value = 100;
      btndiv.value = true;
      satrtagaindiv.value = false;
    }
    return {
      monsterprogress,
      playerprogress,
      btndiv,
      satrtagaindiv,
      surrender,
      attack,
      specialAttack,
      heal,
      divchange,
      startAgain,
    };
  },
};
</script>
<style src="../assets/css/style.css"></style>
