import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import shoppingCartSvg from '../../assets/vectors/shopping_cart.svg';
import iconPng from '../../assets/images/icon.png';

const Header = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <header className='fixed bg-blue-darkest h-16 w-full z-50'>
      <div className='flex items-center h-full px-4 py-3 md:space-x-5'>
        <img src={iconPng} alt='Logo de CompraFacil' className='h-full md:block hidden' />
        {/* Justification: 
      https://developer.mozilla.org/es/docs/Web/HTML/Element/span*/}
        <span className='text-white text-xl font-bold md:block hidden'>CompraFácil</span>
        {/* Justification:
      https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11.html */}
        <hr className='h-full w-0.5 blue bg-white md:block hidden' />
        <nav>
          <ul className='flex items-center space-x-4'>
            <li className='text-white text-xl'>
              <a href='/'>Catálogo</a>
            </li>
            <li className='text-white text-xl'>
              <a href='/blog'>Blog</a>
            </li>
            <li className='text-white text-xl'>
              <a href='/ayuda'>Ayuda</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='absolute right-0 top-0 h-full flex items-center px-4 py-3 space-x-5'>
        {/* Justification:
        https://stackoverflow.com/questions/21625672/what-is-an-accessible-way-to-mark-up-buttons-whose-only-content-is-an-icon */}
        <a href="/shopping-cart" className='h-full'>
          <img src={shoppingCartSvg} alt='Tu carrito de compras' className='h-full' />
        </a>

        {user !== null ?
          <button
            onClick={() => setUser(null)}
            className='bg-blue-light h-full px-3 font-semibold text-lg rounded-md'>
            Cerrar sesión
          </button>
          :
          <a href='/login' className='flex items-center justify-center bg-blue-light h-full px-3 font-semibold text-lg rounded-md hover:bg-blue-medium-light'>Iniciar sesión</a>}

      </div>
    </header>
  )
}

export default Header