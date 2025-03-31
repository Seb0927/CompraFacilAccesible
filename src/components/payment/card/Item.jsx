const Item = (props) => {
  const { credit_card } = props;
  console.log(credit_card)

  return (
    <li className='flex flex-row h-12 w-full items-center border-b-2 border-black first:border-t-2'>
      <input 
      type='radio'
      id={credit_card.number}
      name='credit_card'
      value={credit_card.number} 
      className=''/>

      <label htmlFor={credit_card.number} className='flex flex-row w-full space-x-6 items-center cursor-pointer'>
        <span className='flex-1 text-center text-lg'>{'**' + credit_card.number.slice(-4)}</span>
        <span className='flex-1 text-center text-lg'>{credit_card.expiration_month + "/" + credit_card.expiration_year}</span>
        <span className='flex-1 text-center text-lg'>{credit_card.owner}</span>
      </label>
    </li>
  )
}

export default Item