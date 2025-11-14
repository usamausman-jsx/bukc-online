import React from 'react'

export default async function page({ params }) {
    const { id } = await params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await data.json()


    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-6 px-4'>
            <h2 className='text-3xl'>            {post.title}</h2>
            <p>    {post.body}</p>
        </div>
    )
}
