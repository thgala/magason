import axios from 'axios'

export function getProducts() {
  return {
    type: 'GET_PRODUCTS',
    promise: axios.get('http://api.randomuser.me/?results=50')
  };
}
