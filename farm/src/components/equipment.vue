<template>
    <div>
      <div class="card border-dark mb-4" id="card2">
        <div class="card-header mb-8"><h2>Equipment ( उपकरण )</h2>
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
  name: 'equipment',
  components: {
  },
  data () {
    return {
      jobs: [
        {
          name: 'Digging Trowel',
          id: 1,
          price: 250
        },
        {
          name: 'Hand Hoe',
          id: 2,
          price: 265
        },
        {
          name: 'Sickle',
          id: 3,
          price: 350
        },
        {
          name: 'Mini Tiller',
          id: 4,
          price: 8000
        },
        {
          name: 'PitchFork',
          id: 5,
          price: 359
        },
        {
          name: 'Fruit Picker',
          id: 6,
          price: 200
        },
        {
          name: 'Hand Spray',
          id: 7,
          price: 656
        },
        {
          name: 'PickAxe',
          id: 8,
          price: 550
        },
        {
          name: 'Shovel',
          id: 9,
          price: 430
        },
        {
          name: 'Hedge Shear',
          id: 10,
          price: 275
        },
        {
          name: 'Concrete Rake Wirewinding',
          id: 11,
          price: 350
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
</style>
