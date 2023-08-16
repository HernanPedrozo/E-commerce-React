import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Catalogo'/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
