import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'

const Product = ({ id , title , price , imageUrl }) => {

    const { getItemQty , addItem , decreaseItem , removeItem } = useCartContext()

    const qty = getItemQty(id)

    return (
        <div>
           <Card className='h-100'>
                <Card.Img variant="top" src={imageUrl}  height = "200px" 
                    style={{ objectFit : "cover" }} />
                <Card.Body className="d-flex flex-column bg-dark">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2 text-light">{title}</span>
                        <span className="ms-2 text-light">{price}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        {
                            qty === 0 ? (
                                <Button className="w-100 bg-secondary"
                                    onClick={() => addItem(id)}
                                >
                                    Add To Cart
                                </Button>
                            ) : (
                                <div className="d-flex align-items-center flex-column text-light"
                                    style={{ gap:"0.5rem" }}
                                >
                                    <div className="d-flex align-items-center justify-content-center text-light"
                                        style={{ gap:'0.5rem' }}
                                    >
                                        <Button className="btn btn-secondary"
                                            onClick={() => addItem(id)}
                                        >+</Button>
                                        <span className="fs-5 m-3">{qty}</span>
                                        <Button className="btn btn-secondary"
                                            onClick={() => decreaseItem(id)}
                                        >-</Button>
                                    </div>
                                    <Button className="btn btn-dark" size="sm" onClick={() => removeItem(id)}>
                                        Remove
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                </Card.Body>  
           </Card> 
        </div>
    )
}

export default Product