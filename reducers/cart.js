import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  REMOVE_PRODUCTS
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

function addedIds(state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ];
    case REMOVE_PRODUCTS:
       if (state.indexOf(action.productId) !== action.productId) {
          return [ ...state.slice(0,state.indexOf(action.productId)),
              ...state.slice(state.indexOf(action.productId)+1)
          ];
        }
      return [ ...state, action.productId ];
    default:
      return state
  }
}
function quantityById(state = initialState.quantityById, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
  return state.addedIds
}
export function getRemoveid(state) {
  return state.removeid
}
