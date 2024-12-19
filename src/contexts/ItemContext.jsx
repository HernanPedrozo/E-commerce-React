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
    return items.some(itemInCart => itemInCart.id === itemId)
}

const addItem = (item, quantity) => {

    if (quantity == null || isNaN(quantity)) {
        console.error("quantity is undefined or not a number", quantity);
        return; 
    }

    if (isInCart(item.id)) {
        const newItem = items.map(itemInCart => {
            if (itemInCart.id === item.id) {
                return { ...itemInCart, quantity: itemInCart.quantity + quantity }; 
            } else {
                return itemInCart;
            }
        });
        setItems(newItem);

    } else {
        setItems([...items, { ...item, quantity }]); 
    }
};

const onAdd = (item, quantity) =>{
    addItem(item, quantity)
}

const removeItem = (itemId) =>{
    const newCart = items.filter(item => item.id !== itemId)
    setItems(newCart)               
}

const clearCart = () => {
    setItems([])
}

return (
<ItemContext.Provider value={{isInCart, addItem, removeItem, items, amountOfItemsInCart, totalPrice, clearCart, onAdd}}>
    {children}
</ItemContext.Provider>
)
}