import React from 'react'
import posts from '@/utils/posts'

const Post3 = () => {

  const post = posts[2]

  return (
    <section>
      <h1 className='text-6xl text-blue-darkest pb-8 text-center font-bold'>Blog</h1>
      <article className='h-auto w-full px-10 py-6 bg-blue-medium-light'>
        <h2 className='text-4xl font-bold'>{post.title}</h2>
        <p className='text-lg'>{postcontent}</p>
      </article>
    </section>
  )
}

export default Post3