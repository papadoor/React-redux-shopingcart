import React, { Component, PropTypes } from 'react'
import ProductCart from './ProductCart'

export default class Cart extends Component {
  render() {
    const { products, total, onCheckoutClicked } = this.props

    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
      <em>Please add some products to cart.</em> :
      products.map(product =>
        <ProductCart
          name_product={product.name_product}
          price_product={product.price_product}
          quantity={product.quantity}
          key={product.id_product}/>
    )

    return (
      <div className="Cart">
        <h3>Your Cart</h3>
        <div>{nodes}</div>
        <p>Total: &#36;{total}</p>
        <button onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    )
  }
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}
