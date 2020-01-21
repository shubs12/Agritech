<template>
<div>
    <div class="card" id="card">
     <div>
         <h3>Crop Prediction</h3>
         <br>
      <form  v-on:submit="onSubmit">
        <div class="form-group col-md-8">
      <label for="gender">Season</label>
      <select id="gender" class="form-control" v-model.number="season">
        <option selected value="1">Rainy</option>
        <option value="2">Summer</option>
        <option value="0">Winter</option>
      </select>
      </div>
      <div class="form-group col-md-8">
        <label for="contact">ph</label>
        <input type="float" class="form-control" id="contact" v-model.number="ph" required>
      </div>
        <div class="form-group col-md-8">
        <label for="contact">Temprature</label>
        <input type="float" class="form-control" id="contact" v-model.number="temp" required>
        </div>
        <div class="form-group col-md-8">
        <label for="contact">Humidity</label>
        <input type="number" class="form-control" id="contact" v-model.number="hum" required>
        </div>
        <div class="form-group col-md-8">
        <label for="contact">Rainfall</label>
        <input type="number" class="form-control" id="contact" v-model.number="rain" required>
        </div>
        <div class="form-group col-md-8">
        <label for="contact">Yield</label>
        <input type="float" class="form-control" id="contact" v-model.number="yeld" required>
        </div>
        <div class="form-group col-md-8">
        <label for="contact">Water</label>
        <input type="number" class="form-control" id="contact" v-model.number="aow" required>
        </div>
  <br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">Submit</button>
   <router-link to="/services"><button type="submit" class="btn btn-secondary" id="btn" style="margin-left:5%">Back</button></router-link>
  </div>

      </form>
    </div>
    </div>
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      season: '',
      rain: '',
      ph: '',
      temp: '',
      hum: '',
      yeld: '',
      aow: ''
    }
  },
  computed: {
    ...mapGetters(['Crop'])
  },
  methods: {
    ...mapActions(['predictor']),
    onSubmit (e) {
      e.preventDefault()
      const predict = {
        a: this.season,
        b: this.ph,
        c: this.temp,
        d: this.hum,
        e: this.rain,
        f: this.yeld,
        g: this.aow
      }
      this.predictor(predict)
    }
  }
}
</script>

<style scoped>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#card{
  width: 65%;
  height: 55%;
  top: 6vh;
  margin-left: 17%;
  padding: 2%;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.2);
  margin-bottom: 5%;
}
h3 {
  text-align: center;
  color: black;
  font-weight: bold;
}
label {
  text-align: center;
  color: black;
  font-weight: bold;
}
</style>
