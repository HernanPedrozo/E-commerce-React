import { createContext } from "react"
import { useState } from "react"
export const ItemContext = createContext()

export const CartContext = ({children}) => {

const [items, setItems] = useState([])

const amountOfItemsInCart = items.length

const totalPrice = items.reduce((total, item) => item.price + total, 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })


const isInCart = (itemId)  => {
    return !!items.find(itemInCart => itemInCart.id === itemId)
}

const addItem = (item) =>{
    if(isInCart(item.id)) return
    setItems(prev =>[...prev, item])
}

const removeItem = (itemId) =>{
    const newCart = items.filter(item => item.id !== itemId)
    setItems(newCart)
}

const clearCart = () => {
    setItems([])
}

return (
<ItemContext.Provider value={{isInCart, addItem, removeItem, items, amountOfItemsInCart, totalPrice, clearCart}}>
    {children}
</ItemContext.Provider>
)
}