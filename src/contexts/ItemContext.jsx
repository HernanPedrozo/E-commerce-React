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

const addItem = (item, stock) =>{
    if(stock == null || isNaN(stock)){
        console.error("quantity is undefined or not a number", stock)
        return; // Detiene la ejecución si stock no es valido
    }
    if(isInCart(item.id)) {
        const newItem = items.map(i => {
            if (isInCart.id === item.id) {
                return {...item, stock:i.stock+stock}
            }else{
                return i
            }
            } 
        )
        setItems(newItem)
    } else{
        setItems([...items, {...items, stock}])
    }
    
}

const onAdd = (item, stock) =>{
    addItem(item,stock)
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