import React from 'react'
import productItems from "../data/products.json"
import { Button, Stack} from 'react-bootstrap'
import { useCartContext } from '../context/CartContext'

const CartItem = ({ id , qty }) => {
    
    const { removeItem } = useCartContext()

    const product = productItems.find(item => item.id === id)

    if(product == null) return null

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center" >
            <img 
                src={product.imageUrl}
                style={{ width:"125px" , height:'75px' , objectFit:'cover' }}
            />
            <div className="me-auto text-dark">
                <div>
                    {product.title} {' '}
                    { qty > 1 && (
                        <div>
                            {' '}
                            <span className="text-muted" style={{ fontSize:"1rem" }}>تعداد : {qty}</span>
                        </div>
                    ) }
                </div>
                <div>
                    قیمت : {product.price * qty} دلار
                </div>
                <Button className="btn btn-danger" variant="outline-dark" size="sm"
                    onClick={() => removeItem(id)}
                >&times; حذف از سبد خرید :</Button>
            </div>
        </Stack>
    )

}

export default CartItem