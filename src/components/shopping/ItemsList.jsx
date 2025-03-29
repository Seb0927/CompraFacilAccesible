import { useContext } from 'react'
import { ShoppingCartContext } from '@/contexts/ShoppingCartContext'
import Item from './Item'

const ItemsList = () => {

  const { cart } = useContext(ShoppingCartContext);

  // Show message if cart is empty
  if (!cart.length) {
    return (
      <div className='flex flex-col space-y-4 py-4'>
        <hr className='h-0.5 w-full border-black bg-black' />
        <article className='w-full py-8'>
          <p className='w-full text-center italic'>No has agregado productos a tu carrito de compras</p>
        </article>
        <hr className='h-0.5 w-full border-black bg-black' />
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-4 py-4'>
      <hr className='h-0.5 w-full border-black bg-black' />
      {cart.map((product, index) => (
        <>
          <Item key={index} product={product} />
          <hr className='h-0.5 w-full border-black bg-black' />
        </>
      ))}
    </div>
  )
}

export default ItemsList