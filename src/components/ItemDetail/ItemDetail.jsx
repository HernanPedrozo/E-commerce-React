import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, image, price, stock }) => {


return (
<div className="container">
    <article className="ItemDetail">
        <section className="half-section__img">
            <picture>
                <img src={image} alt={name} className="ItemImgDetail" />
            </picture>
        </section>
        <section className="half-section__text">
            <h1 className="DetailName">{name}</h1>
            <h2 className="price">${price}</h2>
            <footer>
                <Counter stock={stock} initial={1} />
            </footer>
        </section>
    </article>
</div>
)
}

export default ItemDetail