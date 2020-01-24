<template>
<div>
        <div>
            <br>
            <div :key="login.title" v-for="login in loggedIn"><h2 style="color:black">Welcome , {{login.name}}</h2></div><br>
        </div>

<div class="container">
  <button type="button" class="btn btn-dark" id="btn" v-on:click="changeSeed"><h4>Seeds ( बीज )</h4></button>
  <button type="button" class="btn btn-dark" id="btn" v-on:click="changeFert"><h4>Fertilizers ( उर्वरक )</h4></button>
  <button type="button" class="btn btn-dark" id="btn" v-on:click="changeEquip"><h4>Equipment ( उपकरण )</h4></button>
</div>
<seeds v-if="pos==='seeds'" />
<fertilizers v-if="pos==='fertilizers'" />
<equipment v-if="pos==='equipment'"/>
</div>

</template>
<script>
import { mapGetters } from 'vuex'
import seeds from '@/components/seeds'
import fertilizers from '@/components/fertilizers'
import equipment from '@/components/equipment'
export default {
  name: 'App',
  components: {
    seeds,
    fertilizers,
    equipment
  },
  data () {
    return {
      pos: 'seeds'
    }
  },
  methods: {
    changeSeed: function () {
      this.pos = 'seeds'
    },
    changeFert: function () {
      this.pos = 'fertilizers'
    },
    changeEquip: function () {
      this.pos = 'equipment'
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
#card2{
    margin-left: 5%;
    margin-right: 5%;
    border-style: solid;
  border-width: 4px;
}
  #btn {
    padding: 9px;
    width: 33%;
    margin-bottom: 15px;
  }
</style>
