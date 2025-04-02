import React, { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'
import Item from './Item'
import Container from '../Container'

const Card = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <h1 className='text-4xl font-bold'>Selecciona una dirección</h1>
      <p className='text-lg'>Selecciona la dirección donde deseas recibir tu pedido, puedes agregar también una.</p>

      <div className='flex flex-col space-y-2 py-4'>
        {user.locations.length === 0 ? (
          <>
            <p className='w-full text-center italic py-8'>No tienes direcciones registradas</p>
          </>
        ) : (
          <div className='flex flex-col'>
            {user.locations.map((location, index) => (
              <Item key={index} location={location} />
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-row items-center justify-between w-full'>
        <a href={'/payment/addlocation'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Agregar direccion</a>
        <a href={'/payment'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Continuar</a>
      </div>
    </Container>
  )
}

export default Card;