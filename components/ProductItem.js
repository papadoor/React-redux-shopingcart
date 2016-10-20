import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class ProductItem extends React.Component {
  render() {
    const { product } = this.props

    return (
      <Col md={4} xs={12}>
        <Card>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
          </CardMedia>
          <CardTitle title={product.name_product} subtitle={product.category_product} />
          <CardText>
          {product.description_product}
          </CardText>
          <CardActions>
            <FlatButton label={product.price_product} />
            <RaisedButton primary={true} onClick={this.props.onAddToCartClicked}
          disabled={product.quantity_product > 0 ? '' : 'disabled'}>{product.quantity_product > 0 ? 'Add to cart' : 'Sold Out'}
          </RaisedButton>
          </CardActions>
        </Card>
      </Col>
    )
  }
}

ProductItem.propTypes = {
  product: React.PropTypes.shape({
    name_product: React.PropTypes.string.isRequired,
    price_product: React.PropTypes.string.isRequired,
    description_product: React.PropTypes.string.isRequired,
    quantity_product: React.PropTypes.string.isRequired,
    category_product: React.PropTypes.string.isRequired,
    date_created: React.PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: React.PropTypes.func.isRequired
}
