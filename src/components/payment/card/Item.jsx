import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

const Item = (props) => {
  const { credit_card } = props;
  const { removeCreditCard } = useContext(UserContext);

  return (
    <div className='flex flex-row space-x-6 h-16 w-full items-center border-b-2 border-black first:border-t-2'>
      <input 
      type='radio'
      id={credit_card.number}
      name='credit_card'
      value={credit_card.number}
      aria-label={`Tarjeta terminada en ${credit_card.number.slice(-4)} con fecha de vencimiento ${credit_card.expiration_month}/${credit_card.expiration_year} y titular ${credit_card.owner}`}
      className=''/>

      <div className='flex-auto flex flex-row space-x-6 items-center cursor-pointer' aria-hidden='true'>
        <span className='flex-1 text-center text-lg not-sr-only'>{'**' + credit_card.number.slice(-4)}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{credit_card.expiration_month + "/" + credit_card.expiration_year}</span>
        <span className='flex-1 text-center text-lg not-sr-only'>{credit_card.owner}</span>
      </div>

      <button
        onClick={() => removeCreditCard(credit_card.number)}
        className='bg-blue-dark text-white w-24 py-2 px-4 hover:bg-blue-darkest'
        aria-label={`Eliminar tarjeta terminada en ${credit_card.number.slice(-4)}`}>
        Eliminar
      </button>
    </div>
  )
}

export default Item