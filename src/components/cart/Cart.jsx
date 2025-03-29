import React from 'react'
import ItemsList from './ItemsList'
import { ShoppingCartProvider } from '@/contexts/ShoppingCartContext'

const Cart = () => {
  return (
    <div className='flex justify-center w-full'>
      <section className='flex flex-col space-y-4 h-auto w-full md:w-4/5 lg:w-8/12 py-8 px-8 bg-blue-medium-light'>
        <h1 className='text-4xl font-bold'>Carrito de compras</h1>
        <p className='text-lg'>Un resumen de tus productos agregados para comprar</p>

        <ShoppingCartProvider>
          <ItemsList />
        </ShoppingCartProvider>

        <div className='flex flex-col items-center justify-center'>
          <a href={'/'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Comprar</a>
        </div>

      </section>
    </div>
  )
}

export default Cart;