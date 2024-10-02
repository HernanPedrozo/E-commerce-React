import './Counter.css'


const Counter = ({quantity, setQuantity, stock, item, initial}) => {
    const changeQuantityOfProduct = (num) => {
        setQuantity(quantity + num)
    }


    const disableMinusButton = quantity === initial;
    const disablePlusButton = quantity === stock;

    return (
        <div className='count-container'>
            <div className="count-container__contador">
                <button className="count-container__button" onClick={()=> changeQuantityOfProduct(-1)} disabled={disableMinusButton}>-</button>
                <span className="count-container__qty">{quantity}</span>
                <button className="count-container__button" onClick={()=> changeQuantityOfProduct(+1)} disabled={disablePlusButton}>+</button>
            </div>
        </div>
    )
}

export default Counter