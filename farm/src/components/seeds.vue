<template>
    <div>
      <div class="card border-dark mb-4" id="card2">
        <div class="card-header mb-8"><h2>Seeds ( बीज )</h2>
    <div cols="4"><b-navbar-nav class="ml-auto">
       <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
    </b-navbar-nav></div>
        </div>
      <b-container>
        <b-row align-v="center">
          <div class="card" v-for="job in filteredJobs" :key="job.id" :name="job.name">
            <div>
         <div>
    <b-card
    :title="name"
    tag="article"
    style="width: 21rem;"
    class="mb-4"
    id="card1"
  ><b-card-text>
    <h4 >{{ job.name}}</h4>
    <ul>
    <li class="card-text">Price :-{{ job.price }}</li>
    </ul>
    </b-card-text>
  <b-button  @click="submit(job)" variant="primary" class="btn btn-primary btn-sm">Add to Cart</b-button>
  </b-card>
        </div>
    </div>
          </div>
        </b-row>
      </b-container>
       <b-pagination
       align="center"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      prev-text="Prev"
      next-text="Next"
    ></b-pagination>
    </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      jobs: [
        {
          name: 'Onion',
          id: 1,
          price: '99/kg'
        },
        {
          name: 'Rice',
          id: 2,
          price: '140/kg'
        },
        {
          name: 'Jowar',
          id: 3,
          price: '110/kg'
        },
        {
          name: 'Maize',
          id: 4,
          price: '120/kg'
        },
        {
          name: 'Wheat',
          id: 5,
          price: '90/kg'
        },
        {
          name: 'Bajra',
          id: 6,
          price: '150/kg'
        },
        {
          name: 'Sugarcane',
          id: 7,
          price: '100/kg'
        },
        {
          name: 'Arhar',
          id: 7,
          price: '115/kg'
        },
        {
          name: 'Cotton',
          id: 8,
          price: '200/kg'
        },
        {
          name: 'Groundnut',
          id: 9,
          price: '300/kg'
        },
        {
          name: 'Sesame',
          id: 10,
          price: '80/kg'
        },
        {
          name: 'Banana',
          id: 11,
          price: '120/kg'
        },
        {
          name: 'Cashewnut',
          id: 12,
          price: '180/kg'
        }
      ],
      displayjobs: [],
      currentPage: '1',
      rows: 1,
      perPage: 6,
      search: ''
    }
  },
  created () {
    this.rows = this.jobs.length
  },
  computed: {
    filteredJobs: function () {
      const start = (this.currentPage - 1) * this.perPage
      return this.jobs.filter((jobs) => {
        return jobs.name.match(this.search)
      }).slice(start, start + 6)
    }
  },
  methods: {
    ...mapActions(['addCart']),
    submit: function (jobs) {
      this.addCart(jobs)
    }
  }
}
</script>
<style scoped>
#card2{
    margin-left: 5%;
    margin-right: 5%;
    border-style: solid;
    border-width: 0px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}
h3 {
  color: black;
}
</style>
