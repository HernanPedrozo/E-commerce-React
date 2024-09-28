import { useContext } from "react"
import { ItemContext } from "../../contexts/ItemContext"

import Container from "../Container/Container"

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
            <h1>Carrito de compras - precio total: {totalPrice}</h1>
            <button onClick={clearCart}>
                Vaciar carrito
            </button>
            {
                items.map(({ id, name, price, image }) => (
                    <div>
                        <img width={150} src={image} alt={name} />
                        <h2>
                           {name}
                        </h2>
                        <span>
                            {price}
                        </span>
                        <button onClick={()=> removeItem(id)}>Borrar del carrito</button>
                    </div>
                ))
            }
        </Container>
    )
}

export default Cart