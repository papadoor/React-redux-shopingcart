import React, { Component, PropTypes } from 'react'
import { Row } from 'react-bootstrap';

export default class ProductsList extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name_product}</h3>
        <Row className="show-grid">
          {this.props.children}
        </Row>
      </div>
    )
  }
}

ProductsList.propTypes = {
  children: React.PropTypes.node,
  name_product: React.PropTypes.string.isRequired
}
