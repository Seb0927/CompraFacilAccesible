import React from 'react'
import Item from './Item';
import products from '@/utils/products';

const Catalog = () => {
  return (
    <section>
      { /*(Section) Justification:
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section#usage_notes */}
      <h1 className='text-6xl text-blue-darkest pb-8 text-center font-bold'>Catálogo</h1>

      {/* ¿Why not ul-li tags? TL;DR: Think a list as you always do, short elements and that's it
    https://stackoverflow.com/questions/16213214/is-it-a-good-practice-to-put-articles-inside-lis
    Posdata: Actually, there is a debate: https://stackoverflow.com/questions/19307443/semantic-html-of-an-articles-list */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
        {products.map((product, index) => (
          <Item
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            images={product.images}
          />
        ))}
      </div>
    </section>
  )
}

export default Catalog