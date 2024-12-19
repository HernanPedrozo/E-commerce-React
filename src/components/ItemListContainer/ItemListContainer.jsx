
import { useEffect } from 'react'
import { useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { getFirestore, getDocs, collection, where, query} from 'firebase/firestore'

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    
    const db = getFirestore()
    
    const refCollection = !id  
    ? collection(db,'items') 
    : query(collection (db,'items'),where("categoryId", "==", id)) 
    
    getDocs(refCollection).then((snapshot) => {
      setProducts(
      snapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
    )
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(() =>{ 
      setLoading(false)
    })
    }, [id])

if (loading){
return ( <h1>Cargando...</h1> ) 
}

  return (
    <div className="ItemListContainer">
    <h1 className="title">{greeting}</h1>
    <ItemList products={products} />
  </div>
  )


}

export default ItemListContainer
