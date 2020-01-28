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
      <strong v-if="!totalDiscount"> {{total | currencyEur}} ({{total/rate | currencyUsd}})</strong>
      <span v-if="totalDiscount">
        <strike> {{total + 100 | currencyEur}} ({{total/rate | currencyUsd}})</strike>
        <strong> {{totalWithDiscount | currencyEur}} ({{totalWithDiscount/rate | currencyUsd}})</strong>
      </span>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import axios from 'axios'

import config from '../../../config.json'

axios.defaults.baseURL = config.API_BASE_URL

export default {
  name: 'ShoppingCartSummary',
  data() {
    return {
      rate: null
    };
  },
  mounted() {
    axios.get('rate')
      .then(response => {
        this.rate = response.data
      })
  },
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
