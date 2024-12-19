import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getProductById} from "../../asyncMock"
import "./ItemDetailContainer.css"
import { getFirestore, getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
const [product, setProduct] = useState({})    
const [loading, setLoading] = useState(true)
const { id } = useParams()

useEffect(() =>{

    const db = getFirestore()
        
        const refDoc = doc(db,"items", id )
        
        getDoc(refDoc).then((snapshot) => {
            setProduct({...snapshot.data(), id: snapshot.id})
        })
        .catch((error)=>{
        console.log(error)
        }) .finally(() =>{ 
            setLoading(false)
        })
},[id])

if (loading){
    return ( <h1>Cargando...</h1> ) 
    }

if(!id) {
    return <h1>El producto no existe</h1>
}

return (
    <>
        <ItemDetail {...product}/>
    </>
    )
}

export default ItemDetailContainer