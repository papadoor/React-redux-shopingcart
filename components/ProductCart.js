import React, { Component, PropTypes } from 'react';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class ProductChart extends Component {
  render() {
        var style = {textAlign: 'right'};
    const { price_product, quantity, name_product, onRemoveClicked } = this.props
    return (
      <div>
        <Card>
          <CardHeader
            title={name_product}
            subtitle={price_product}
            avatar="http://www.material-ui.com/images/jsa-128.jpg"
          />
          <CardText>
            <Divider />
            <strong>Total buy: </strong>
              <div style={style} >$ {price_product} {quantity ? `x ${quantity}` : null}</div>
              <strong><div style={style} >$ {(price_product * quantity).toFixed(2)}</div></strong>
          </CardText>
          <CardActions>
            <RaisedButton fullWidth={true} label="Delete" secondary={true}  onClick={onRemoveClicked}/>
          </CardActions>
        </Card>
        <br />
      </div>
    )
  }
}

ProductChart.propTypes = {
  price_product: PropTypes.string,
  quantity: PropTypes.string,
  name_product: PropTypes.string,
  onRemoveClicked: PropTypes.func
}
