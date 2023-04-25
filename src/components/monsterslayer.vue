<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-danger text-white text-center monsterslayerDiv py-5">
        Monster Slayer
      </h1>
      <div class="col-12 monsterhealthDiv text-center border rounded">
        <h4>Monster Health</h4>
        <div class="progress">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
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
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <div>
      <div class="buttonDiv">
        <button type="button" class="btn butn">Attack</button>
        <button type="button" class="btn butn">Special Attack</button>
        <br />
        <button type="button" class="btn butn">Heal</button>
        <button type="button" class="btn butn" @click="surrender()">
          Surrender
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "monster-slayer",
  setup() {
    function surrender() {
      alert("you surrender");
    }

    return {
      surrender,
    };
  },
};
</script>
<style src="../assets/css/style.css"></style>
