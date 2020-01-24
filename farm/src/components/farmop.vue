<template>
    <div>
        <div>
            <br>
            <div :key="login.title" v-for="login in loggedIn"><h2 style="color:black">Welcome , {{login.name}}</h2></div><br>
            <div class="card" id="card1">
                <br>
                <form  v-on:submit="onSubmit">
                <div class="form-row">
                <div class="form-group col-md-4">
                <label for="name">Crop (फ़सल)</label>
                <input type="text" class="form-control" v-model="crop" required>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                <label for="contact"> Variety (विविधता)</label>
                <input type="text" class="form-control" v-model="type" required>
                </div>
                <div class="col-md-1"></div>
                </div>

                <br>
                <div class="form-row">
                <div class="form-group col-md-4">
                <label for="name"> No of boxes (बक्से की संख्या)</label>
                <input type="number" class="form-control" v-model="boxes" required>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                <label for="contact"> Quantity per Box (प्रति बक्से मात्रा)</label>
                <input type="number" class="form-control" v-model="perBox" required>
                </div>
                <div class="col-md-1"></div>
                </div>

                <br>
                <div class="form-row">
                <div class="form-group col-md-4">
                <label for="name"> Expected price per Box (अपेक्षित कीमत प्रति बॉक्स)</label>
                <input type="number" class="form-control" v-model="price" required>
                </div>
                <div class="col-md-1"></div>
                <div class="form-group col-md-4">
                <label for="name"> Extra information (अतिरिक्त जानकारी)</label>
                <input type="text" class="form-control" v-model="desc" required>
                </div>
                </div>

                <br>
                <div>
                <button type="submit" class="btn btn-primary">Submit</button>
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
      crop: '',
      type: '',
      boxes: '',
      perBox: '',
      price: '',
      desc: ''
    }
  },
  computed: {
    ...mapGetters(['loggedIn'])
  },
  methods: {
    ...mapActions(['addCrops']),
    onSubmit (e) {
      e.preventDefault()
      const crop = {
        item: this.crop,
        variety: this.type,
        nob: this.boxes,
        quantity: this.perBox,
        cost: this.price,
        desc: this.desc,
        available: this.boxes * this.perBox
      }
      this.addCrops(crop)
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
  color: black;
}
label{
    font-size: 18px;
}
#card1{
  margin-left: 20%;
  margin-right: 5%;
  margin-bottom: 4%;
  width: 60%;
  padding: 3%;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.2);
}
label {
  font-size: 21px;
}
.btn {
  padding: 10px;
}
</style>
