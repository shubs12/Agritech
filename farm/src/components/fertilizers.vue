<template>
    <div>
      <div class="card border-dark mb-4" id="card2">
        <div class="card-header mb-8"><h2>Fertilizers ( उर्वरक )</h2>
    <div cols="4"><b-navbar-nav class="ml-auto">
       <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
    </b-navbar-nav></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="job in filteredJobs" :key="job.id" :name="job.name">
        <div class="card border-secondary mb-4" id="card2" style="max-width: 22rem;">
          <div class="card-header"><h4>{{job.name}}</h4></div>
          <div class="card-body text-secondary">
          <h5 class="card-title">Price:- {{job.price}}</h5>
          <p class="card-text">Description:- some quick description of the given crop</p>
          <button type="submit" class="btn btn-primary" @click="submit(job)">Add to Cart</button>
        </div>
        </div>
        </div>
        </div>
        <div>
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
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'fertilizers',
  components: {
  },
  data () {
    return {
      displayjobs: [],
      currentPage: '1',
      rows: 2,
      perPage: 6,
      search: ''
    }
  },
  created () {
    this.rows = this.$store.getters.Fertilizers.length
  },
  computed: {
    filteredJobs: function () {
      const start = (this.currentPage - 1) * this.perPage
      return this.$store.getters.Fertilizers.filter((jobs) => {
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
    border-width: 1px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}
h3 {
  color: black;
}
#hi{
  background-image: url('https://picsum.photos/600/300/?image=25');
}
</style>
