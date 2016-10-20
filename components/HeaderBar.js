import React, { Component, PropTypes } from 'react'
import { AppBar } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import DrawerLeft from './LeftNav';
import DrawerRight from './CartBar';

import { connect } from 'react-redux'
import { checkout, removeCart } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
class HeaderBar extends Component {

    constructor(props) {
      super(props);
        this.state = {
            open: false
        }
    }

handleClose() {
    this.setState({open: false});
}
    //Toggle function (open/close Drawer)
    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
      const { products, total } = this.props
        return (
            <div>
                <AppBar
                    title="Title"
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                    iconElementRight={
                      <DrawerRight
                          products={products}
                          total={total}
                          key={products.id_product}
                          onRemoveClicked={this.props.removeCart}
                          onCheckoutClicked={() => this.props.checkout()}
                      />
                    }
                />
                <DrawerLeft open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)} />
           </div>
        )
    }
}
HeaderBar.propTypes = {
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
  checkout: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired

}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    total: getTotal(state)
  }
}

export default connect(mapStateToProps,
  { checkout, removeCart }
)(HeaderBar)