import { useState} from 'react'
import './ItemCount.css'

function ItemCount() {
    
    const [ qty, setQty ] = useState(initial)
    
    const addProduct = (num) => {
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

export default ItemCount