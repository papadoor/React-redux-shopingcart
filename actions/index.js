import request from 'superagent'
import axios from 'axios'
import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  RECEIVE_PRODUCTS,
  REMOVE_PRODUCTS } from '../constants/ActionTypes'

export function getAllProducts() {
  return dispatch => {
    axios.get('http://api1.con/api/product')
    .then(function (response) {
      dispatch({
        type: RECEIVE_PRODUCTS,
        products: response.data.data
      })
    })
    .catch(function (error) {
      return new Error(err);
    });
  }
}

export function addToCart(productId) {

  return {
    type: ADD_TO_CART,
    productId
  }
}
export function removeCart(productId) {
  return {
    type: REMOVE_PRODUCTS,
    productId
  }
}

export function checkout(products) {
  return {
      type: CHECKOUT_REQUEST
  }
}
