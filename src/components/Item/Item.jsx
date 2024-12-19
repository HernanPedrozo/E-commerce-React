import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id,title,img,price}) => {

return (
<article className="CardItem">
    <header className="Header">
        <h3 className="ItemHeader"> {title} </h3>
    </header>
    <picture>
        <img src={img} alt={title} className="ItemImg" />
    </picture>
    <section>
        <p className="Info">${price}</p>
    </section>
    <footer className="ItemFooter">
        <Link to={`/detail/${id}`} className="Option">
        <button className="ButtonDetail">
            Ver detalle
        </button>
        </Link>
    </footer>
</article>
)
}

export default Item