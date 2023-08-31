import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id,name,image,price}) => {

    return (
        <article className="CardItem">
                <header className="Header">
                <h3 className="ItemHeader"> {name} </h3>             
                </header>
                <picture>
                <img src={image} alt={name} className="ItemImg"/>
                </picture>
        <section> 
            <p className="Info">${price}</p>
        </section>
        <footer className="ItemFooter">
        <Link to={`/detail/${id}`} className="Option">Ver detalle</Link>
        </footer> 
        </article>
    )
}

export default Item