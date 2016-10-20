import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

class ProductsContainer extends Component {
  render() {
    const { products } = this.props
    return (
      <ProductsList name_product="Products">
        {products.map(product =>
          <ProductItem
            key={product.id_product}
            product={product}
            onAddToCartClicked={() => this.props.addToCart(product.id_product)} />
        )}
      </ProductsList>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id_product: PropTypes.string.isRequired,
    category_product: PropTypes.string.isRequired,
    name_product: PropTypes.string.isRequired,
    description_product: PropTypes.string.isRequired,
    price_product: PropTypes.string.isRequired,
    weight_product: PropTypes.string.isRequired,
    quantity_product: PropTypes.string.isRequired,
    date_created: PropTypes.string.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
