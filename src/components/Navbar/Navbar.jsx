import React from 'react'
import Icon from '../Icon/Icon'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
            <Icon/>
            <ul>
              <li>
                <a href="">Store</a>
              </li>
              <li>
                <a href="">Mac</a>
              </li>
              <li>
                <a href="">iPad</a>
              </li>
              <li>
                <a href="">iPhone</a>
              </li>
              <li>
                <a href="">Watch</a>
              </li>
            </ul>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar
