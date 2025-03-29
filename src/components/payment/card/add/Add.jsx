import React from 'react'
import Form from "./Form"

const Add = () => {
  return (
    <div className='flex justify-center w-full'>
    <section className='flex flex-col space-y-4 h-auto w-full md:w-4/5 lg:w-8/12 py-8 px-8 bg-blue-medium-light'>
      <h1 className='text-4xl font-bold'>Agregar nueva tarjeta de crédito</h1>
      <p className='text-lg'>Ingresa los datos de tu tarjeta de crédito a continuación</p>

      <UserProvider>
        <Form />
      </UserProvider>

      <div className='flex flex-row items-center justify-between w-full'>
        <a href={'/card/add'} className='flex items-center justify-center h-9 w-48 bg-blue-dark text-white text-xl hover:bg-blue-darkest'>Agregar tarjeta</a>
      </div>
    </section>
  </div>
  )
}

export default Add