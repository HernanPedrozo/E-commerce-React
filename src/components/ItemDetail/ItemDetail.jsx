import Counter from "../Counter/Counter"
import { useContext } from "react"
import { ItemContext } from "../../contexts/ItemContext"
import Container from "../Container/Container"
import "./ItemDetail.css"

const ItemDetail = ( {id, name, image, price, stock} ) => {

const {isInCart, addItem, removeItem} = useContext(ItemContext)

return (
<Container>
    <article className="ItemDetail">
        <section className="half-section__img">
            <picture>
                <img src={image} alt={name} className="ItemImgDetail" />
            </picture>
        </section>
        <section className="half-section__text">
            <h1 className="DetailName">{name}</h1>
            <h2 className="price">${price}</h2>
            <h3>Stock: {stock}</h3>
            <footer>
                <Counter stock={stock} initial={1} />
                <button disabled={isInCart(id)} className="btn btn_Item btn_addItem"  onClick={()=> addItem({id,name,image,price,stock})}>Agregar al carrito</button>
                <button className="btn btn_Item btn_remove " onClick={()=> removeItem(id)}>Borrar del carrito</button>
            </footer>
        </section>
    </article>
</Container>
)
}

export default ItemDetail