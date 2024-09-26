import {getProductById} from "../../asyncMock"
import { useEffect } from "react"
import {useState} from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})    

const { productId } = useParams()


useEffect(() =>{
    getProductById(productId).then(response => {
        setProduct(response)
    })
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