import Counter from "../Counter/Counter"
import { useContext, useState } from "react"
import { ItemContext } from "../../contexts/ItemContext"
import Container from "../Container/Container"
import "./ItemDetail.css"

const INTIAL_PRODUCT_QUANTITY = 1



const ItemDetail = ( {id, title, img, price, stock} ) => {

const {isInCart, addItem, removeItem} = useContext(ItemContext)

const [ quantity, setQuantity ] = useState(INTIAL_PRODUCT_QUANTITY)

const newItem = {
    id,
    title,
    img,
    price,
    stock
}

const handleAdd = () => {
    addItem(newItem, quantity)
    setQuantity(1)
}

return (
<Container>
    <article className="ItemDetail">
        <section className="half-section__img">
            <picture>
                <img src={img} alt={title} className="ItemImgDetail" />
            </picture>
        </section>
        <section className="half-section__text">
            <h1 className="DetailName">{title}</h1>
            <h2 className="price">${price}</h2>
            <h3>Stock: {stock}</h3>
            <footer>
                <Counter quantity={quantity} setQuantity={setQuantity} item={newItem} stock={stock} initial={INTIAL_PRODUCT_QUANTITY} />
                <button className="btn btn_Item btn_addItem"  onClick={handleAdd}>Agregar al carrito</button>
                <button className="btn btn_Item btn_remove " onClick={()=> removeItem(id)}>Borrar del carrito</button>
            </footer>
        </section>
    </article>
</Container>
)
}

export default ItemDetail