<template>
    <div>
         <b-col>
    <b-card
    :title="name"
    tag="article"
    style="width: 21rem;"
    class="mb-4"
    id="card1"
  ><b-card-text>
     <h5 class="card-title">variety</h5>
    <ul>
    <li class="card-text"> Information :- *info*</li>
    <li class="card-text">Price :- *price*</li>
    </ul>
    </b-card-text>
  <b-button href="#" variant="primary" class="btn btn-primary btn-sm">Add to Cart</b-button>
  </b-card>
        </b-col>
    </div>
</template>
<script>
export default {
  props: ['name']
}
</script>
<style scoped>
#card1 {
  margin: 30px auto;
  width: 270px;
  height: 240px;
 border-radius: 15px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: 0.4s;
}
</style>
