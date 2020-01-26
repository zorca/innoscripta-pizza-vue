<template>
  <ul class="list-group">
    <li class="list-group-item">
      Subtotal ({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}): {{subtotal | currencyEur}}
      <em v-if="productDiscount"><b> (30% OFF applied)</b></em>
    </li>

    <li class="list-group-item">
      Shipping:
      <span v-if="!freeShipping"> {{shipping | currencyEur}}</span>
      <em v-if="freeShipping"> Free Shipping</em>
    </li>

    <li class="list-group-item">
      <strong>Total:</strong>
      <strong v-if="!totalDiscount"> {{total | currencyEur}}</strong>
      <span v-if="totalDiscount">
        <strike> {{total + 100 | currencyEur}}</strike>
        <strong> {{totalWithDiscount | currencyEur}}</strong>
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'ShoppingCartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ]),
    ...mapState({
      productDiscount: state => state.shoppingCart.productDiscount,
      freeShipping: state => state.shoppingCart.freeShipping,
      totalDiscount: state => state.shoppingCart.totalDiscount
    }),
    totalWithDiscount () {
      let total = this.$store.getters.total
      return total > 0 ? this.total : 0
    }
  }
}
</script>
