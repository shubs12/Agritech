<template>

<div class="card" style="margin:5%" id="card2">
  <div class="card-header"><h2>Transaction log (लेन देन सुची) </h2></div>
  <div class="card-body text-dark">
<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" id="trans" >
          Transaction No :- *number*
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse">
      <div class="card-body">
        body
      </div>
    </div>
  </div>
  </div>
</div>
</div>

</template>

<script>

export default {
}
</script>
<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#card2{
    top: 1vh;
    margin-left: 5%;
    margin-right: 5%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
    }
h2 {
    font-size: 30px;
}
#trans {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}

</style>
