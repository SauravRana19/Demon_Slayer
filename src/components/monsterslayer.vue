<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-danger text-white text-center monsterslayerDiv p-3">
        Monster Slayer
      </h1>
      <div
        class="col-12 monsterhealthDiv text-center border rounded"
      >
        <h1>Monster Health</h1>
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
      <div
        class="col-12 yourhealthDiv text-center border rounded"
      >
        <h1>Your Health</h1>
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
      <div class="RedMonster"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "monster-slayer",
  data() {},
};
</script>
<style>
.monsterslayerDiv {
  height: 100px;
  font-weight: bold;
  font-family: monospace;
}
.monsterhealthDiv {
  margin: 0 0 0 30%;
  height: 100px;
  width: 40% !important ;
  font-weight: bold;
  font-family: fantasy;
}
.yourhealthDiv {
  margin: 0.2% 0% 0% 30% !important;
  height: 100px;
  width: 40% !important;
  font-weight: bold;
  font-family: fantasy;
}
.progress {
  height: 2rem !important;
}
</style>
