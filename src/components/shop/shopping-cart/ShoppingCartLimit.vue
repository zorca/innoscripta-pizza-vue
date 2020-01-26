<template>
  <strong>{{limit | currencyEur}}</strong>
</template>

<script>
export default {
  name: 'ShoppingCartLimit',
  props: {
    limit: Number
  }
}
</script>
