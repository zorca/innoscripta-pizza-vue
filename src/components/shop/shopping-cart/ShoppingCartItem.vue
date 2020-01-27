<template>
  <div class="media mb-3">
    <div class="mr-2">
      <img class="cart-image" :src="item.image" :alt="item.name">
    </div>

    <div class="media-body">
      <strong class="d-block">{{item.name}}</strong>
      <span>Quantity: {{item.quantity}} - {{item.price | currencyEur}}</span>
    </div>

    <div class="media-right align-middle">
      <RemoveFromCart :product="item" />
    </div>
  </div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart'

export default {
  name: 'ShoppingCartItem',
  props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>

<style scoped>
  .cart-image {
    height: 50px;
    width: auto;
  }
</style>
