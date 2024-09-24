import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
return (
<>
  <nav className='Navbar'>
    
    <div className='Categories'>
      <Link to='/' className='link'>Inicio</Link>
      <Link to='/category/samsung' className='link'>Samsung</Link>
      <Link to='/category/motorola' className='link'>Motorola</Link>
      <Link to='/category/xiaomi' className='link'>Xiaomi</Link>
    </div>
    <CartWidget/>
  </nav>
</>
)
}

export default Navbar