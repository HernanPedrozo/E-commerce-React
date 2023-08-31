import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ id, name, image, category, description, price, stock }) => {


    return (
    <article>
        <h1>{ name }</h1>
        <picture> 
            <img src={image} alt= {name} className = "ItemImg" />
        </picture>
        <footer>
        <Counter stock={stock} initial={1}/>
        </footer>
    </article>
    )
}

export default ItemDetail