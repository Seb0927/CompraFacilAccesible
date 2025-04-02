import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

const Item = (props) => {
  const { location } = props;
  const { removeLocation } = useContext(UserContext);

  return (
    <div className='flex flex-row space-x-6 h-16 w-full items-center border-b-2 border-black first:border-t-2'>
      <input 
      type='radio'
      id={location.address}
      name='location'
      value={location.address}
      aria-label={`Dirección ${location.address} en el barrio ${location.neighborhood} con nombre designado ${location.name}`}
      className=''/>

      <div className='flex-auto flex flex-row space-x-6 items-center cursor-pointer' aria-hidden='true'>
        <span className='flex-1 text-center text-lg not-sr-only'>{location.address}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{location.neighborhood}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{location.name}</span>
      </div>

      <button
        onClick={() => removeLocation(location.number)}
        className='bg-blue-dark text-white w-24 py-2 px-4 hover:bg-blue-darkest'
        aria-label={`Eliminar dirección ${location.address}`}>
        Eliminar
      </button>
    </div>
  )
}

export default Item