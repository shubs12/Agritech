<template>

<div class="card" style="margin:5%" id="card2" >
  <div class="card-header"><h2>Crops for sale ( बिक्री के लिए फसल )</h2></div>
  <div class=" row">
    <div class="col-sm-4" :key="crops.id" v-for="crops in allCrops">
  <div class="card-body text-dark">
<div class="card" id="card1">
  <div class="card-body" >
    <h5 class="card-title">{{crops.item}}</h5>
    <ul>
    <li class="card-text"> Information :- {{crops.desc}}</li>
    <li class="card-text">Price :- {{crops.cost}}</li>
    <li class="card-text">Availaibility :- {{crops.available}}</li>
    <li class="card-text">sold :- *sold*</li>
    </ul>
  </div>
</div>
  </div>
</div>

</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['allCrops'])
  },
  methods: {
    ...mapActions(['getCrops'])
  }
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
    border: white;
    }
h2 {
    font-size: 30px;
}
#card1 {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  border: none;
}
.card-title {
  font-size: 25px;
}

</style>
