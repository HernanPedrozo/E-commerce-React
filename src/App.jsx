import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartContext} from './contexts/ItemContext'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart'

import './App.css'


function App() {

return (
<div className='App'>
  <CartContext>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Catalogo' /> }/>
        <Route path='/category/:id' element={ <ItemListContainer greeting="Listado de productos filtrado" /> }
        />
        <Route path='/detail/:id' element={<ItemDetailContainer />}/>

        <Route path='/cart' element={<Cart/>}/>

        <Route path='*' element={<h1>ERROR 404</h1>}/>
      </Routes>
    </BrowserRouter>
  </CartContext>
</div>
)
}

export default App