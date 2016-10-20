import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

function products(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        quantity_product: state.quantity_product - 1
      }
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id_product] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id_product)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
