import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

const Item = (props) => {
  const { creditCard, index } = props;
  const { removeCreditCard } = useContext(UserContext);

  return (
    <div className='flex flex-row space-x-6 h-16 w-full items-center border-b-2 border-black first:border-t-2'>
      <input 
      type='radio'
      id={creditCard.number}
      name='creditCard'
      value={creditCard.number}
      aria-label={`Tarjeta terminada en ${creditCard.number.slice(-4)} con fecha de vencimiento ${creditCard.expiration_month}/${creditCard.expiration_year} y titular ${creditCard.owner}`}
      className=''/>

      <div className='flex-auto flex flex-row space-x-6 items-center cursor-pointer' aria-hidden='true'>
        <span className='flex-1 text-center text-lg not-sr-only'>{'**' + creditCard.number.slice(-4)}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{creditCard.expiration_month + "/" + creditCard.expiration_year}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{creditCard.owner}</span>
      </div>

      <button
        onClick={() => removeCreditCard(creditCard.number)}
        className='bg-blue-dark text-white w-24 py-2 px-4 hover:bg-blue-darkest'
        aria-label={`Eliminar tarjeta terminada en ${creditCard.number.slice(-4)}`}>
        Eliminar
      </button>
    </div>
  )
}

export default Item