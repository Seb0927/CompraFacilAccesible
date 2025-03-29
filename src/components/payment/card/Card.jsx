import React from 'react'
import { UserProvider } from '@/contexts/UserContext'
import CardsList from './CardsList'

const Card = () => {
  return (
    <div className='flex justify-center w-full'>
      <section className='flex flex-col space-y-4 h-auto w-full md:w-4/5 lg:w-8/12 py-8 px-8 bg-blue-medium-light'>
        <h1 className='text-4xl font-bold'>Selecciona una tarjeta de credito</h1>
        <p className='text-lg'>Selecciona la tarjeta de crédito que utilizarás para esta compra, también puedes agregar una</p>

        <UserProvider>
          <CardsList />
        </UserProvider>

        <div className='flex flex-row items-center justify-between w-full'>
          <a href={'/card/add'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Agregar tarjeta</a>
          <a href={'/card'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Continuar</a>
        </div>
      </section>
    </div>
  )
}

export default Card;