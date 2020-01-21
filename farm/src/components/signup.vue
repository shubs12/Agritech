<template>
<div>
  <div>
    <div class="card" id="card">
     <div>
      <form v-on:submit="onSubmit">
        <h3>
          Personal Information ( व्यक्तिगत जानकारी )
        </h3>
        <br>
  <div class="form-row">
    <div class="form-group col-md-5">
      <label for="name">Name ( नाम )</label>
      <input type="text" class="form-control" v-model="name" id="name" required>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-5">
      <label for="contact">Contact Number ( संपर्क )</label>
      <input type="text" class="form-control" v-model="contact" id="contact" required>
    </div>
    <div class="col-md-1"></div>
  </div>
  <div class="form-row">
    <div class="col-md-2">
      <label for="gender">Gender ( लिंग )</label>
      <select id="gender" class="form-control" v-model="gender">
        <option selected value="male">Male ( पुरुष )</option>
        <option value="female">Female ( महिला )</option>
        <option value="others">other ( अन्य )</option>
      </select>
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-3">
      <label for="fam">No of Family members</label>
      <input type="number" v-model="fam" class="form-control" id="fam">
    </div>
    <div class="col-md-1"></div>
    <div class="col-md-4">
      <label for="adhar">Adharcard number ( आधार कार्ड नंबर )</label>
      <input type="number" v-model="adhar" class="form-control" id="adhar" required>
    </div>
  </div>
  <br>
  <div class="form-row">
    <div class="form-group col-md-5">
      <label for="name">date of birth ( जन्म की तारीख )</label>
      <input type="date" v-model="dob" class="form-control" id="name" required>
    </div>
  </div>
  <hr style="border-top:1px solid black">
  <br>
  <h3>Address (पता)</h3>
  <div class="form-row">
  <div class="form-group col-md-3">
    <label for="house">House no (मकान क्रमांक)</label>
    <input type="text" v-model="house" class="form-control" id="house" required>
  </div>
  <div class="col-md-1"></div>
  <div class="col-md-3">
    <label for="village">Village ( गाँव )</label>
    <input type="text" v-model="village" class="form-control" id="village" required>
  </div>
  <div class="col-md-1"></div>
  <div class="form-group col-md-3">
    <label for="gram">Gram panchayat ( ग्राम पंचायत )</label>
    <input type="text" v-model="gram" class="form-control" id="gram">
  </div>
  </div>
<div class="form-row">
  <div class="form-group col-md-3">
    <label for="district">District ( जिला )</label>
    <input type="text" v-model="district" class="form-control" id="district" required>
  </div>
  <div class="col-md-1"></div>
  <div class="col-md-3">
    <label for="state">State ( राज्य )</label>
    <input type="text" v-model="state" class="form-control" id="state" required>
  </div>
  <div class="col-md-1"></div>
  </div>
  <hr style="border-top:1px solid black"><br>
  <!-- <h3>Other information ( अन्य जानकारी )</h3>
  <div class="form-row">
    <div class="col-md-4">
      <label for="occupation">Occupation ( काम )</label>
      <select id="occupation" class="form-control" v-model="occupation">
        <option selected value="farmer">farmer ( किसान )</option>
        <option value="seeds">seed and fertilizer seller ( बीज और उर्वरक विक्रेता )</option>
        <option value="market">retailer ( फुटकर विक्रेता )</option>
        <option value="farm-eqip">farm equipment provider ( कृषि उपकरण प्रदाता )</option>
      </select>
    </div>
    <div class="col-md-1"></div>
  <div class="form-group col-md-4">
    <label for="reg">Registration number ( पंजीकरण संख्या )</label>
    <input type="text" class="form-control" id="house" v-model="reg" required>
  </div>
  </div>
  <hr style="border-top:1px solid black">
  <br>
  <div class="form-row">
  <div class="form-group col-md-3">
    <label for="pass">Password(पासवर्ड)</label>
    <input type="password" class="form-control" v-model="password" id="pass" required>
  </div>
  <div class="col-md-1"></div>
  <div class="col-md-5">
    <label for="cpass">Confirm Password (पासवर्ड की पुष्टि कीजिये)</label>
    <input type="password" class="form-control" v-model="cpassword" id="cpass" required>
  </div>
  <div class="col-md-1"></div>
  </div>
  <hr style="border-top:1px solid white"><br>-->
  <div class="form-group">
    <div class="form-check">
      <input class="verification" type="checkbox" id="verify">
        I agree all the terms and conditions and I am fully responsible for the information I have provided and read all the privacy policies.
        (मैं सभी नियमों और शर्तों से सहमत हूं और मैंने जो जानकारी प्रदान की है और सभी गोपनीयता नीतियों को पढ़ा है, उसके लिए मैं पूरी तरह से जिम्मेदार हूं.)
    </div>
  </div>
  <button type="submit" class="btn btn-primary">SIGN IN</button>
</form>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import navbar from '@/components/navbar'
import router from '../router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    navbar
  },
  data () {
    return {
      name: '',
      contact: '',
      gender: '',
      fam: '',
      adhar: '',
      dob: '',
      house: '',
      village: '',
      gram: '',
      district: '',
      state: '',
      // occupation: '',
      // reg: '',
      cart: [],
      cartLength: ''
      /* password: '',
      cpassword: '' */
    }
  },
  computed: {
    ...mapGetters(['allUses'])
  },
  methods: {
    ...mapActions(['addUsers']),
    async onSubmit (e) {
      e.preventDefault()
      const users = {
        name: this.name,
        phone_no: this.contact,
        gender: this.gender,
        fam: this.fam,
        aadhar_no: this.adhar,
        dob: this.dob,
        house: this.house,
        village: this.village,
        gram: this.gram,
        district: this.district,
        state: this.state,
        occupation: this.occupation,
        reg: this.reg,
        cart: this.cart
        /* password: this.password,
        cpassword: this.cpassword */
      }
      this.addUsers(users)
      router.push('./login')
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
.form-check {
  color: black;
}
</style>
