import { useContext, useState } from 'react'

import { ShoppingCartContext } from '@/contexts/ShoppingCartContext';

import Carousel from './Carousel';
import Notification from './Notification';

const Item = (props) => {
  const { title, price, description, images } = props;
  const { addToCart } = useContext(ShoppingCartContext);

  const [notification, setNotification] = useState('');

  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);

  const handleAddToCart = () => {
    addToCart({ title, price, description, images });
    setNotification(`${title} añadido al carrito`);
  };

  return (
    <>
      <article className='h-96 md:h-88 flex bg-blue-medium-light p-6 rounded-lg items-center'>
        <div className='h-3/4 w-full px-2 flex'>
          <Carousel description={description} images={images} />
          <div className='w-1/2 flex flex-row items-center justify-center'>
            <div className='ml-6 w-full flex flex-col items-center'>
              <h2 className='text-center font-bold text-xl'>{title}</h2>
              <span className='text-center text-xl mt-2'>{formattedPrice}</span>
              <button 
                aria-label={`Añadir ${title}`}
                className='bg-blue-dark text-white mt-3 lg:mt-6 px-6 py-2 text-xl w-full rounded-lg hover:bg-blue-darkest'
                onClick={handleAddToCart}>
                Añadir
              </button>
            </div>
          </div>
        </div>
      </article>
      <Notification message={notification} onClose={() => setNotification('')} />
    </>
  );
};

export default Item;