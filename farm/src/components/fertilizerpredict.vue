<template>
<div>
    <div class="card" id="card">
     <div>
         <h3>Fertilizer Prediction</h3>
         <br>
      <form  v-on:submit="onSubmit">
        <div class="form-group col-md-8">
      <label for="gender">Calcium</label>
      <input type="float" class="form-control" id="contact" v-model.number="Ca" required>
      </div>
      <br>
      <div class="form-group col-md-8">
        <label for="contact">Magnesium</label>
        <input type="float" class="form-control" id="contact" v-model.number="Mg" required>
      </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Potassium</label>
        <input type="float" class="form-control" id="contact" v-model.number="K" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Sulphur</label>
        <input type="float" class="form-control" id="contact" v-model.number="S" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Nitrogen</label>
        <input type="float" class="form-control" id="contact" v-model.number="N" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Lime</label>
        <input type="float" class="form-control" id="contact" v-model.number="L" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Carbon</label>
        <input type="float" class="form-control" id="contact" v-model.number="C" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Phosphorous</label>
        <input type="float" class="form-control" id="contact" v-model.number="P" required>
        </div>
        <br>
        <div class="form-group col-md-8">
        <label for="contact">Moisture</label>
        <input type="float" class="form-control" id="contact" v-model.number="M" required>
        </div>
  <br>
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
      Ca: '',
      Mg: '',
      K: '',
      S: '',
      N: '',
      L: '',
      C: '',
      P: '',
      M: ''
    }
  },
  computed: {
    ...mapGetters(['Fertilizer'])
  },
  methods: {
    ...mapActions(['ferpred']),
    onSubmit (e) {
      e.preventDefault()
      const predict = {
        a: this.Ca,
        b: this.Mg,
        c: this.K,
        d: this.S,
        e: this.N,
        f: this.L,
        g: this.C,
        h: this.P,
        i: this.M
      }
      this.ferpred(predict)
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
