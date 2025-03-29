import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

const CardsList = () => {
  const { user } = useContext(UserContext);
  if (!user.locations) {
    return (
      <div className='flex flex-col space-y-4 py-4'>
        <hr className='h-0.5 w-full border-black bg-black' />
        <article className='w-full py-8'>
          <p className='w-full text-center italic'>No tienes tarjetas de crédito guardadas</p>
        </article>
        <hr className='h-0.5 w-full border-black bg-black' />
      </div>
    )
  }

  return (
    <div className='flex flex-col space-y-4 py-4'>
      <hr className='h-0.5 w-full border-black bg-black' />
    </div>
  )
}

export default CardsList