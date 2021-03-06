import axios from 'axios'

import config from '../../config.json'

axios.defaults.baseURL = config.API_BASE_URL

const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

let products = [];

const shipping = 10.00;

const promotions = [
  { 'id': 1, 'title': '30% OFF' },
  { 'id': 2, 'title': '100.00 € Discount' },
  { 'id': 3, 'title': 'Free Shipping' },
  { 'id': 4, 'title': '+ 100.00 € on limit' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 300)
  },

  getProducts (cb) {
    axios.get('products')
      .then(response => {
        products = response.data;
        cb(products);
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally();
  },

  getShipping (cb) {
    setTimeout(() => cb(shipping), 300)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 300)
  }
}
