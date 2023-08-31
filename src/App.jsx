import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer" //;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Catalogo'/> }/>
          <Route path='/category/:categoryId' element={ <ItemListContainer greeting="catalogo"/> } />
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
