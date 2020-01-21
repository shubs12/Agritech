<template>
  <div>
    <article class="main-image">
        <section>
          <h1>Fill form to predict Crop or Fertilizer</h1>
          <br>
          <router-link to="/croppredict"><button class="btn btn-x1 btn-light" >Crop Prediction</button></router-link>
          <router-link to="/fertilizerpredict"><button class="btn btn-x1 btn-light" >Fertilizer Prediction</button></router-link>
        </section>
      </article>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
article{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.btn-x1{
  padding: 15px;
  font-family: sans-serif;
  font-size: 1.25rem;
}
.main-image {
  min-height: 100vh;
  background-size: cover;
  padding: 0 10px;
  text-align: center;
  width: 100%;
}
.main-image{
  background: url('../assets/img/j.jpg') no-repeat;
  background-size: cover;
}
h1{
  font-size: 45px;
  font-weight: bold;
  color: white;
  text-shadow: 3px 3px #ff0000;
}
span {
  color: white;
  font-size:  25px;
  font-weight: bold;
}
</style>
