import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
return (
<div>
  <nav className='Navbar'>
    
    <Link to='/' className='link'>Inicio</Link>
    <div className='Categories'>
      <Link to='/category/samsung' className='link'>Samsung</Link>
      <Link to='/category/motorola' className='link'>Motorola</Link>
      <Link to='/category/xiaomi' className='link'>Xiaomi</Link>
    </div>
    <CartWidget />
  </nav>
</div>
)
}

export default Navbar