import React from 'react'
import { Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import productItems from "../data/products.json"
import Product from '../Components/Product'

const Shop = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className='g-3'>
                    {
                        productItems.map(item => (
                            <Col key={item.id}>
                                <Product {...item}/>
                            </Col>
                        ))
                    }
            </Row>
        </div>
    )
}

export default Shop