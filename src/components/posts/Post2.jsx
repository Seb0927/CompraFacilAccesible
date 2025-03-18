import React from 'react'
import posts from '@/utils/posts'

const Post2 = () => {

  const post = posts[1]

  // Split the content by newline characters to create an array of paragraphs
  const paragraphs = post.content.split('\n').filter(para => para.trim() !== '')

  return (
    <section>
      <h1 className='text-6xl text-blue-darkest pb-8 text-center font-bold'>Blog</h1>
      <article className='h-auto w-full px-10 py-6 bg-blue-medium-light'>
        <h2 className='text-4xl font-bold mb-3'>{post.title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='text-lg mb-4'>
            {paragraph}
          </p>
        ))}
      </article>
    </section>
  )
}

export default Post2