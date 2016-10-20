import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

class CartContainer extends Component {
  render() {
    const { products, total } = this.props

    return (
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => this.props.checkout()} />
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id_product: PropTypes.string.isRequired,
    category_product: PropTypes.string.isRequired,
    name_product: PropTypes.string.isRequired,
    description_product: PropTypes.string.isRequired,
    price_product: PropTypes.string.isRequired,
    weight_product: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  }
}

export default connect(mapStateToProps,
  { checkout }
)(CartContainer)
