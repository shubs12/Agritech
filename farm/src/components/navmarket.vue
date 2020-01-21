<template>
<div>
    <market />
</div>
</template>
<script>
import market from '@/components/market'
export default {
  name: 'App',
  components: {
    market
  },
  data () {
    return {
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
  color: #2c3e50;
}
#card2{
    margin-left: 5%;
    margin-right: 5%;
    border-style: solid;
  border-width: 2px;
}
.tabs {
  font-size: 20px;
  font-weight: bold;
  font-family: sans-serif;
}
</style>
