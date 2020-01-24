<template>
    <div>
      <div class="card border-dark mb-4" id="card2">
        <div class="card-header mb-8"><h2>Retailers market ( खुदरा विक्रेताओं का बाजार )</h2>
    <div cols="4"><b-navbar-nav class="ml-auto">
       <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
    </b-navbar-nav></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.item" >
        <div class="card border-secondary mb-4" id="card2" style="max-width: 22rem;">
          <div class="card-header"><h4>{{jobs.item}} - &ensp; {{jobs.variety}}</h4></div>
          <div class="card-body text-secondary">
          <h5 class="card-title">Price:- {{jobs.cost}}</h5>
          <h6 class="card-title">Available:- {{jobs.available}}</h6>
          <h6 class="card-title">Description:- {{jobs.desc}}</h6>
          <button type="submit" class="btn btn-primary">Buy Now</button>
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
import { mapGetters } from 'vuex'
export default {
  name: 'market',
  components: {
  },
  data () {
    return {
      displayjobs: [],
      currentPage: '1',
      rows: 1,
      perPage: 9,
      search: ''
    }
  },
  created () {
    this.rows = this.$store.getters.Market.length
  },
  computed: {
    ...mapGetters(['Market']),
    filteredJobs: function () {
      const start = (this.currentPage - 1) * this.perPage
      return this.$store.getters.Market.filter((jobs) => {
        return jobs.item.match(this.search)
      }).slice(start, start + 9)
    }
  }
}
</script>
<style scoped>
#card2{
    margin-left: 5%;
    margin-top: 5%;
    margin-right: 5%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
    }
h2 {
    font-size: 40px;
}
</style>
