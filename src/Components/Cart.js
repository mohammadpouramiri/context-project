import React from 'react'
import { useCartContext } from '../context/CartContext'
import { Offcanvas, Stack } from "react-bootstrap"
import CartItem from './CartItem'
import productItems from '../data/products.json'

const Cart = ({ isOpen }) => {

    const { CloseCart , cartItems } = useCartContext()

    return (
        <Offcanvas show={isOpen} onHide={CloseCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id} {...item}/>
                        ))
                    }
                    <div className="fw-bold fs-5 text-dark">
                        قیمت کل  : {' '} دلار
                        {
                            cartItems.reduce((total , currentItem) => {
                                const product = productItems.find(item => 
                                        item.id === currentItem.id
                                    )

                                return total + (product?.price || 0) * currentItem.qty
                            } , 0)
                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Cart