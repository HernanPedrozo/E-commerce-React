import { useContext } from "react"
import { ItemContext } from "../../contexts/ItemContext"
import { BackSpace } from "../BackSpace/BackSpace"
import Container from "../Container/Container"
import TrashIcon from "../TrashIcon/TrashIcon"
import "./Cart.css"

function Cart() {
    const {items, removeItem, totalPrice, clearCart, amountOfItemsInCart} = useContext(ItemContext)


    if(amountOfItemsInCart === 0) {
        return (
            <Container>
                <h1>
                    No hay items en tu carrito :c
                </h1>
            </Container>

        )
    }

    return (
        <Container>
            <div className="products" >
            <h1 className="cart_title" >Carrito de compras</h1>
            <table className="table table_cart">
                <tbody className="table_body" >
                <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio $</th>
                            <th>Total $</th>
                        </tr>
                {
                items.map(({ id, name, price, image, quantity}) => (
                        <tr className="productos">
                            <td>
                            <img className="cart_img" src={image} alt={name} />
                            </td>
                            <td className="cart_name">  
                                <span>
                                    {name}
                                </span>
                            </td>
                            <td>
                                {quantity}
                            </td>
                            <td>
                                {price}
                            </td>
                            <td>{price * quantity}</td>
                            <td>
                            <button className="btn_delete" onClick={()=> removeItem(id)}>
                                <BackSpace/>
                                </button>
                            </td>
                        </tr>
                ))
            }
            </tbody>
            </table>

            <div className="total_price" >

                <h3>Total: {totalPrice}</h3>

            <button className="btn_delete" onClick={clearCart}>
                <TrashIcon/>
            </button>
            </div>
            </div>
        </Container>
    )
}

export default Cart