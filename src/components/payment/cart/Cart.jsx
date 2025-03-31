import { useContext } from 'react'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import Item from './Item'
import Container from '../Container'

const Cart = () => {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <Container>
      <h1 className='text-4xl font-bold'>Carrito de compras</h1>
      <p className='text-lg'>Un resumen de tus productos agregados para comprar</p>

      <div className='flex flex-col space-y-4 py-4'>
        <hr className='h-0.5 w-full border-black bg-black' />
        {cart.length === 0 ? (
          <>
            <p className='w-full text-center italic py-8'>No has agregado productos a tu carrito de compras</p>
            <hr className='h-0.5 w-full border-black bg-black' />
          </>
        ) : (
          cart.map((product, index) => (
            <div key={index} className='w-full '>
              <Item product={product} />
              <hr className='h-0.5 w-full border-black bg-black' />
            </div>
          ))
        )}
      </div>

      <div className='flex flex-row items-center justify-center'>
        <a href={'/payment/card'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Comprar</a>
      </div>
    </Container>
  )
}

export default Cart;