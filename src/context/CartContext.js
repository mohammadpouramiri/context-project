import { createContext, useContext , useState } from 'react'
import Cart from '../Components/Cart'
import { UseLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext({})

export function useCartContext () {
    return useContext(CartContext)
}

export function CartProvider ({ children }) {

    const [isOpen , setIsOpen] = useState(false)

    const [cartItems , setCartItems] = UseLocalStorage(
        'shopping cart' ,
        []
    )

    const cartQty = cartItems.reduce((qty , item) =>item.qty + qty , 0 )

    const OpenCart = () => setIsOpen(true)

    const CloseCart = () => setIsOpen(false)

    function getItemQty (id) {
    return cartItems.find(item => item.id === id)?.qty || 0
    }

    function addItem (id) {
        setCartItems((currItems) => {
            if(currItems.find(item => item.id === id) == null) {
                return [ ...currItems , { id , qty : 1 } ]
            } else {
                return currItems.map((item) => {
                    if(item.id === id) {
                        return { ...item , qty : item.qty + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseItem(id) {
        setCartItems((currItems) => {
            if(currItems.find(item => item.id === id)?.qty == 1){
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if(item.id === id) {
                        return { ...item , qty : item.qty - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeItem (id) {
        setCartItems((currItems) => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return <CartContext.Provider
     value={{
                getItemQty , 
                addItem , 
                decreaseItem , 
                removeItem , 
                cartQty , 
                OpenCart ,
                CloseCart ,
                cartItems
           }}>
            {children}
            <Cart isOpen = {isOpen}/>
         </CartContext.Provider>
}