<template>
    <div>
      <div class="card" id="card2">
        <div class="card-header mb-8"><h2>Market</h2>
    <div cols="4"><b-navbar-nav class="ml-auto">
       <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
    </b-navbar-nav></div>
        </div>
      <b-container>
        <b-row align-v="center">
          <marketcard v-for="job in filteredJobs" :key="job.id" :name="job.name"></marketcard>
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
import marketcard from '@/components/marketcard.vue'
export default {
  name: 'market',
  components: {
    marketcard
  },
  data () {
    return {
      jobs: [
        {
          name: 'ABC',
          id: 1
        },
        {
          name: 'CDE',
          id: 2
        },
        {
          name: 'EFG',
          id: 3
        },
        {
          name: 'GIC',
          id: 4
        },
        {
          name: 'IJK',
          id: 5
        },
        {
          name: 'KCM',
          id: 6
        },
        {
          name: 'MNO',
          id: 7
        },
        {
          name: 'OPC',
          id: 8
        },
        {
          name: 'QRS',
          id: 9
        },
        {
          name: 'STUC',
          id: 10
        },
        {
          name: 'UVW',
          id: 11
        },
        {
          name: 'UVWC',
          id: 12
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
    top: 1vh;
    margin-left: 5%;
    margin-right: 5%;
    border-style: solid;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
    }
h2 {
    font-size: 40px;
}
</style>
