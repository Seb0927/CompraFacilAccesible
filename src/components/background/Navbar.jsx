import React from 'react'
import shoppingCartSvg from '../../assets/vectors/shopping_cart.svg';
import userSvg from '../../assets/vectors/user.svg';
import iconPng from '../../assets/images/icon.png';

const Navbar = (props) => {
  return (
    <nav className='fixed bg-blue-darkest h-16 w-full'>
      <div className='flex items-center h-full px-4 py-3 space-x-5'>
        <img src={iconPng} alt='Logo de CompraFacil' className='h-full'/>
        {/* Justification: 
        https://developer.mozilla.org/es/docs/Web/HTML/Element/span*/}
        <span className='text-white text-xl font-bold'>CompraFácil</span>
        <hr className='h-full w-0.5 blue bg-white'/>
        <ul className='flex items-center space-x-4'>
          <li className='text-white text-xl'>
            <a href='/catalogo'>Catálogo</a>
          </li>
          <li className='text-white text-xl'>
            <a href='/blog'>Blog</a>
          </li>
          <li className='text-white text-xl'>
            <a href='/ayuda'>Ayuda</a>
          </li>
        </ul>
      </div>

      <div className='absolute right-0 top-0 h-full flex items-center px-4 py-3 space-x-5'>

        {/* Justification:
        https://stackoverflow.com/questions/21625672/what-is-an-accessible-way-to-mark-up-buttons-whose-only-content-is-an-icon */}
        <a href="/shopping-cart" className='h-full'>
          <img src={shoppingCartSvg} alt='Tu carrito de compras' className='h-full'/>
        </a>
        <button className='bg-blue-light h-full px-3 font-semibold text-lg rounded-md'>Cerrar sesión</button>
        <a href="/user" className='h-full'>
          <img src={userSvg} alt='Tu cuenta' className='h-full' />
        </a>

      </div>
    </nav>
  )
}

export default Navbar