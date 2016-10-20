import React, { Component, PropTypes } from 'react';
import { CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Product extends Component {
  render() {
    const { price_product, name_product, description_product, category_product } = this.props
    return (
        <div>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
          </CardMedia>
          <CardTitle title={name_product} subtitle={category_product} />
          <CardText>
          {description_product}
          </CardText>
        </div>
    )
  }
}
