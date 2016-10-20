import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import HeaderBar from '../components/HeaderBar'
import { Grid, Row, Col } from 'react-bootstrap'

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <ProductsContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default HomeContainer;
