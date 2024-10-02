import { useContext} from 'react'
import { ItemContext } from "../../contexts/ItemContext"
import { useState} from 'react'
import './Counter.css'


const Counter = ({initial, stock, items}) => {

    const {onAdd} = useContext(ItemContext)   
    const [ qty, setQty ] = useState(initial)
    
    const addProduct = (num) => {
        console.log("stock en qty:", typeof qty); // Verifica el tipo de qty
        onAdd(items, qty) // Pasa al qty directamente
        setQty(qty + num)
    }

    return (
        <div className='count-container'>
            <div className="count-container__contador">
                <button className="count-container__button" onClick={()=> addProduct(-1)} disabled={qty === initial}>-</button>
                <span className="count-container__qty">{qty}</span>
                <button className="count-container__button" onClick={()=> addProduct(+1)} disabled={qty === stock}>+</button>
            </div>
        </div>
    )
}

export default Counter