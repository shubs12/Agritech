<template>
<div>
    <div class="card" id="card">
     <div>
         <h3>LOGIN</h3>
         <br>
      <form  v-on:submit="onSubmit">
        <div class="col-md-8">
        <label for="contact">Contact Number ( संपर्क )</label>
        <input type="text" class="form-control" id="contact" v-model="contact" required>
        </div>
        <br>
        <!--<div class="col-md-8">
      <label for="gender">Occupation ( काम )</label>
      <select id="gender" class="form-control">
        <option selected value="farmer">farmer ( किसान )</option>
        <option value="seeds">seed and fertilizer seller ( बीज और उर्वरक विक्रेता )</option>
        <option value="market">retailer ( फुटकर विक्रेता )</option>
        <option value="farm-eqip">farm equipment provider ( कृषि उपकरण प्रदाता )</option>
      </select>
    </div>
    <br> -->
    <div class="form-group col-md-8">
    <label for="pass">Password( पासवर्ड )</label>
    <input type="password" class="form-control" v-model="password" id="pass" required>
  </div>
  <br>
  <br>
  <div>
  <button type="submit" class="btn btn-primary" id="btn" style="margin-left:5%">LOGIN</button>
  </div>

      </form>
    </div>
    </div>
</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      contact: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['allUsers'])
  },
  methods: {
    ...mapActions(['login', 'logiin', 'getCrops']),
    onSubmit (e) {
      e.preventDefault()
      const login = {
        phone_no: this.contact,
        password: this.password
      }
      this.login(login)
      this.getCrops()
    },
    check (e) {
      e.preventDefault()
      const login = {
        phone_no: this.contact,
        password: this.password
      }
      this.logiin(login)
    }
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
