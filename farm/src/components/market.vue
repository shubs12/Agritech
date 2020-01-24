<template>
    <div>
      <div class="card border-dark mb-4" id="card2">
        <div class="card-header mb-8"><h2>Retailers market ( खुदरा विक्रेताओं का बाजार )</h2>
    <div cols="4"><b-navbar-nav class="ml-auto">
       <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
    </b-navbar-nav></div>
        </div>
        <div class="row">
          <div class="col-sm-4" v-for="jobs in filteredJobs" :key="jobs.id" :name="jobs.name" >
        <div class="card border-secondary mb-4" id="card2" style="max-width: 22rem;">
          <div class="card-header"><h4>{{jobs.name}}</h4></div>
          <div class="card-body text-secondary">
          <h5 class="card-title">Price:- {{jobs.price}}</h5>
          <h6 class="card-title">Available:- {{jobs.availabilty}}</h6>
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
export default {
  name: 'market',
  components: {
  },
  data () {
    return {
      jobs: [
        {
          name: 'ABC',
          id: 1,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'CDE',
          id: 2,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'EFG',
          id: 3,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'GIC',
          id: 4,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'IJK',
          id: 5,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'KCM',
          id: 6,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'MNO',
          id: 7,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'OPC',
          id: 8,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'QRS',
          id: 9,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'STUC',
          id: 10,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'UVW',
          id: 11,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        },
        {
          name: 'UVWC',
          id: 12,
          price: '7800',
          availabilty: '2500',
          desc: 'the best discription of the crop'
        }
      ],
      displayjobs: [],
      currentPage: '1',
      rows: 1,
      perPage: 9,
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
