import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'
import Item from './Item'
import Container from '../Container'

const Card = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <Container>
      <h1 className='text-4xl font-bold'>Selecciona una tarjeta de credito</h1>
      <p className='text-lg'>Selecciona la tarjeta de crédito que utilizarás para esta compra, también puedes agregar una</p>

      <div className='flex flex-col space-y-2 py-4'>
      
        {user.credit_cards.length === 0 ? (
          <>
            <p className='w-full text-center italic py-8'>No tienes tarjeta de créditos registradas</p>
          </>
        ) : (
          <ul className='flex flex-col'>
            {user.credit_cards.map((credit_card, index) => (
              <Item key={index} credit_card={credit_card} />
            ))}
          </ul>
        )}
      </div>

      <div className='flex flex-row items-center justify-between w-full'>
        <a href={'/payment/addcard'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Agregar tarjeta</a>
        <a href={'/payment/card'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Continuar</a>
      </div>
    </Container>
  )
}

export default Card;