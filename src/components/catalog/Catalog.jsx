import { useState } from 'react';

import products from '@/utils/products';

import Item from './Item';
import Music from './Music';
import Notification from './Notification';
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext';

const Catalog = () => {
  const [notification, setNotification] = useState('');

  const showNotification = (message) => setNotification(message);

  return (
    <>
      <section>
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <Music />
        </div>

        { /*(Section) Justification:
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#usage_notes */}
        <h1 className='text-6xl text-blue-darkest pb-8 text-center font-bold'>Catálogo</h1>

        {/* ¿Why not ul-li tags? TL;DR: Think a list as you always do, short elements and that's it
    https://stackoverflow.com/questions/16213214/is-it-a-good-practice-to-put-articles-inside-lis
    Posdata: Actually, there is a debate: https://stackoverflow.com/questions/19307443/semantic-html-of-an-articles-list */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
          <ShoppingCartProvider>
            {products.map((product, index) => (
              <Item
                key={index}
                description={product.description}
                images={product.images}
                price={product.price}
                showNotification={showNotification}
                title={product.title}
              />
            ))}
          </ShoppingCartProvider>
        </div>
      </section>
      <Notification message={notification} onClose={() => setNotification('')} />
    </>
  )
}

export default Catalog