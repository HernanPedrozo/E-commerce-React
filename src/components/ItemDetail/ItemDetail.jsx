import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {


    return (
    <article>
        <h2 className="Detailname">{name}</h2>
        <picture> 
            <img src={image} alt= {name} className = "ItemImgDetail"/>
        </picture>
        <footer>
        <Counter stock={stock} initial={1}/>
        </footer>
    </article>
    )
}

export default ItemDetail