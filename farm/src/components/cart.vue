<template>
  <div>
    <div >
      <div :key="cart.id" v-for="cart in Cart" >
        <div class="card-body text-dark">
          <div class="card" id="card2" style="max-width:40rem;">
            <div class="card-body" >
              <h4 class="card-title">{{cart.name}}</h4>
                <ul>
                  <li class="card-text">Price :- {{cart.price}}</li>
                </ul>
              <button type="submit" class="btn btn-primary">Buy Now</button>
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
    ...mapGetters(['Cart'])
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
