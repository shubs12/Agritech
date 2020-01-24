<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">AGRITECH</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="logIn === false">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
        <a class="nav-link"> Home </a>
        </router-link>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link"> Shop </a>
      </li> -->
      <li class="nav-item">
        <router-link to="/login">
        <a class="nav-link"> Login </a>
        </router-link>
      </li>
      <li class="nav-item ">
        <router-link to="/signup">
        <a class="nav-link"> Sign up </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/market">
        <a class="nav-link"> Market </a>
        </router-link>
      </li>
     <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="logIn === true">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">
        <a class="nav-link"> Home </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/fmarket">
        <a class="nav-link"> Market </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/services">
        <a class="nav-link"> Services </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/farmop">
        <a class="nav-link"> Sell </a>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/profile">
        <a class="nav-link"> Profile </a>
        </router-link>
      </li>
      <li class="nav-item ">
        <a class="nav-link" @click="onSubmit"> Logout </a>
      </li>
     <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>   &ensp
      </li> -->
    </ul>
    <router-link to="/cart" >
  <button id="show-btn" class="btn btn-secondary" style="margin-right:10px;" >Cart &ensp;<span class="badge badge-light">5</span>
      </button> </router-link>

  <!-- <b-modal id="bv-modal-example">
    <div class="text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div> -->

     <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import router from '../router'
export default {
  data () {
    return {
      modalShow: false
    }
  },
  methods: {
    ...mapActions(['logout']),
    onSubmit (e) {
      e.preventDefault()
      this.logout()
      router.push('./login')
    },
    submit (e) {
      e.preventDefault()
      router.push('./cart')
    }
  },
  computed: {
    ...mapGetters(['logIn'])
  }
}
</script>

<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: aliceblue;
}

#nav{
  font-family:sans-serif;
}
.nav-link{
  color: aliceblue;
  text-decoration: none;
}

.navbar {
font-size: 20px;
line-height: 35px;
letter-spacing: 0.019em;
font-weight: 700;
font-style: normal;
}

</style>
