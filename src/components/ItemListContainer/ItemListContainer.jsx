
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
if (!categoryId){
    getProducts().then(products => {
        setProducts(products)
        }).finally(() =>{ 
            setLoading(false)
        })
}else{
    getByCategory(categoryId).then(products => {
        setProducts(products)
        })
    }
}, [categoryId])  

if (loading){
return  <h1>Cargando...</h1>
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
