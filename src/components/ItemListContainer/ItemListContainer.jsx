
import { useEffect } from 'react'
import { useState } from 'react'
import { getProducts, getByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

function ItemListContainer({greeting}) {

  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const asyncFunction = categoryId ? getByCategory : getProducts
    
    asyncFunction(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.log('Fallo en la request', error)
    })
    .finally(() =>{ 
      setLoading(false)
  })
}, [categoryId])

if (loading){
return ( <h1>Cargando...</h1> ) 
}


  console.log ()
  return (
    <div className="ItemListContainer">
    <h1 className="title">{greeting}</h1>
    <ItemList products={products} />
  </div>
  )


}

export default ItemListContainer
