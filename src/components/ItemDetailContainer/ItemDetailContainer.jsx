import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getProductById} from "../../asyncMock"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
const [product, setProduct] = useState({})    

const { productId } = useParams()

useEffect(() =>{
    getProductById(productId).then(response => {
        setProduct(response)
    }).catch(error => {console.log('Fallo en la request en el detalle del producto', error)})
},[productId])

if(!productId) {
    return <h1>El producto no existe</h1>
}

return (
    <>
        <ItemDetail {...product}/>
    </>
    )
}

export default ItemDetailContainer