<template>
<div>
<div class="card text-white bg-dark mb-3" style="margin:5%" :key="login.title" v-for="login in loggedIn" >
  <div class="card-body text-white">
      <div class="row">
        <div class="col-sm-12">
            <h4 class="card-title"><strong>Name (नाम) :- </strong>{{login.name}}</h4>
          </div>
      </div>
      <br>
      <div class="row">
          <div class="col-sm-5">
            <h4 class="card-title"><strong>Contact Number (संपर्क) :- </strong>{{login.phone_no}}</h4>
          </div>
          <div class="col-sm-7">
              <h4 class="card-title"><strong>Adharcard number (आधार कार्ड नंबर):- </strong>{{login.aadhar_no}}</h4>
          </div>
      </div>
      <br>
      <div class="row">
          <div class="col-sm-12">
              <h4 class="card-title"><strong>Address (पता) :- </strong>{{login.house}},{{login.village}}, {{login.gram}}, {{login.district}}, {{login.state}} .</h4>
          </div>
      </div>
  </div>
</div>
<csale />
<transaction />
</div>
</template>

<script>
import transaction from '@/components/transaction'
import csale from '@/components/csale'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    transaction,
    csale
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['loggedIn'])
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
#trans{
    text-decoration: none;
    color: black;
    font-size: 60%;
}
.card{
  border-color: black;
}
#big{
  border-style: solid;
  border-width: 4px;
}
h3 {
  color: white;
  text-align: left;
  }
</style>
