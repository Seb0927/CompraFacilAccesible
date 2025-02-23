import React from 'react';
import imagesMap from './Images'

const Item = (props) => {
  const { title, price, description, images } = props;

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);

  return (
    <article className='flex bg-blue-medium-light p-6 rounded-lg items-center' role='region' aria-label='Product'>
      { /*(Article) Justification:
      https://developer.mozilla.org/es/docs/Web/HTML/Element/article */ }
      <div className='h-3/4 w-full px-2 flex'>
        <img
          src={imagesMap[images[0]]}
          alt={description}
          className="w-1/2 object-cover rounded-lg"
        />
        <div className='w-1/2 flex flex-row items-center justify-center'>
          <div className='ml-6 w-full flex flex-col items-center'>
            <span className='text-center font-bold text-xl'>{title}</span>
            <span className='text-center text-xl mt-2'>{formattedPrice}</span>
            <button className='bg-blue-dark text-white mt-3  lg:mt-6 px-6 py-2 text-xl w-full rounded-lg hover:bg-blue-darkest'>
              Añadir
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Item;