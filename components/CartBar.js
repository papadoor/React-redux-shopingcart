import React, { Component, PropTypes } from 'react';
import ProductCart from './ProductCart';


import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CartBar extends Component {

    render() {
        var style = {textAlign: 'right'};
        const { products, total, onCheckoutClicked, onRemoveClicked } = this.props

            const hasProducts = products.length > 0
            const nodes = !hasProducts ?
              <em>Please add some products to cart.</em> :
              products.map(product =>
                <ProductCart
                    onRemoveClicked={() => onRemoveClicked(product.id_product)}
                    name_product={product.name_product}
                    price_product={product.price_product}
                    quantity={product.quantity}
                    key={product.id_product}/>
            )
        return (
            <div>
                <Drawer
                    openSecondary={true}
                    open={this.props.open}
                    onRequestChange={this.props.onToggleDrawer}
                >
                    <AppBar title="Checkout" />
                        <Card>
                            <CardText>
                            <div>{nodes}</div>
                                <strong>{hasProducts ? 'Total To Buy: ' : ''}</strong>
                                <strong><h4 style={style} >{hasProducts ? '$' : ''} {hasProducts ? total : ''}</h4></strong>
                            </CardText>
                            <CardActions>
                                <RaisedButton label={hasProducts ? 'Checkout' : 'Nothing'} fullWidth={true} primary={true}  onClick={onCheckoutClicked}
                              disabled={hasProducts ? '' : 'disabled'} />
                            </CardActions>
                        </Card>
                </Drawer>
            </div>
        );
    }
}

CartBar.propTypes = {
  product: React.PropTypes.shape({
    id_product: PropTypes.string.isRequired,
    name_product: React.PropTypes.string.isRequired,
    price_product: React.PropTypes.string.isRequired,
    quantity_product: React.PropTypes.string.isRequired
  }).isRequired,
  total: PropTypes.string.isRequired,
  onRemoveClicked: PropTypes.func.isRequired,
  onCheckoutClicked: PropTypes.func.isRequired
}