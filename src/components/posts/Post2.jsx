import React from 'react'
import posts from '@/utils/posts'

const Post2 = () => {

  const post = posts[1]

  return (
    <section>
      <h1 className='text-6xl text-blue-darkest pb-8 text-center font-bold'>Blog</h1>
      <article className='h-auto w-full px-10 py-6 bg-blue-medium-light'>
        <h2 className='text-4xl font-bold'>{post.title}</h2>
        <p className='text-lg'>{post.content}</p>
      </article>
    </section>
  )
}

export default Post2