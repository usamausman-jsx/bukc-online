import React from 'react'
import Link from 'next/link'

export default async function page() {

  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return (
    <div className='container px-4 py-6'>
      <h1 className='text-center text-3xl'> Blog Posts</h1>

      <div className='grid grid-cols-3 gap-5 mt-6'>
        {
          posts.map(post => (
            <Link href={`/blog/${post.id}`} className='border rounded-2xl p-5 w-2/3' key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          ))
        }

      </div>
    </div>
  )
}
