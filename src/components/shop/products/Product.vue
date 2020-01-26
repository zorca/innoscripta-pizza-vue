<template>
  <div class="card height-full">
    <div class="card-img-top">
      <img class="img-fluid" src="https://pizza-api.zorca.org/default-images/default.jpg" alt="Pizza image">
    </div>
    <div class="card-body">
      <div class="height-min-140">
        <h5 class="card-title">{{product.name}}</h5>
        <p>{{product.description}}</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <div class="price">{{product.price | currencyEur}}</div>
        <div class="">
          <button type="button" class="btn btn-primary" @click="addToCart(product)">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: mapActions([
    'addToCart'
  ])}
</script>

<style scoped>
  .price {
    font-size: 1.5rem;
  }
  .height-full {
    height: 100%;
  }
  .height-min-140 {
    min-height: 140px;
  }
</style>
