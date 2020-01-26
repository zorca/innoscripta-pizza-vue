export const cartProducts = state => {
  return state.shoppingCart.added.map(({ id, quantity }) => {
    const product =
      state
        .products.all
        .find(product => product.id === id)

    return {
      ...product,
      quantity
    }
  })
}

export const itemsQuantity = state => {
  return cartProducts(state).reduce((quantity, item) => {
    return quantity + item.quantity
  }, 0)
}

export const subtotal = state => {
  const sum = cartProducts(state).reduce((subtotal, item) => {
    return subtotal + item.price * item.quantity
  }, 0)

  return state.shoppingCart.productDiscount ? sum * 0.7 : sum
}

export const shipping = state => {
  if (state.shoppingCart.freeShipping) {
    return 0
  } else {
    return 10.00;
  }
}

export const total = state => {
  const discout = state.shoppingCart.totalDiscount ? -100 : 0
  return subtotal(state) + shipping(state) + discout
}

export const orderOnLimit = state => state.profile.data.limit <= total(state)
