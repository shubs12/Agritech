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
          <button type="submit" class="btn btn-primary">Add to Cart</button>
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
export default {
  name: 'fertilizers',
  components: {
  },
  data () {
    return {
      jobs: [
        {
          name: 'Plant O Boost',
          id: 1,
          price: '545'
        },
        {
          name: 'Miracle Grow',
          id: 2,
          price: '499'
        },
        {
          name: 'Vermi Compost',
          id: 3,
          price: '400'
        },
        {
          name: 'Pot Meal',
          id: 4,
          price: '270'
        },
        {
          name: 'Grow tabs',
          id: 5,
          price: '60'
        },
        {
          name: 'Jivamrut',
          id: 6,
          price: '120'
        },
        {
          name: 'Processed Organic Manure',
          id: 7,
          price: '150'
        },
        {
          name: 'Sterameal',
          id: 8,
          price: '120'
        },
        {
          name: 'Coco Peat Block',
          id: 9,
          price: '150'
        },
        {
          name: 'Sterameal',
          id: 10,
          price: '80'
        },
        {
          name: 'Grow tabs',
          id: 11,
          price: '50'
        },
        {
          name: 'Bonemeal Powder',
          id: 12,
          price: '100'
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
