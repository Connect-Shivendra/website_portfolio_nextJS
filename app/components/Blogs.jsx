import { assets, BlogsList } from '@/assets/assets'
import React from 'react'

/* Add search functionality on your blog posts */

const Blogs = () => {
    
  return (
    <div id='blogs' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center mb-2 text-lg font-Ovo'>My Blogs</h2>
        
        <div className='flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 justify-center'>
        {BlogsList.map((item)=>(
            <ul >
                <li>{item.name}</li>
            </ul>

                    
            ))}
        </div>
    </div>

  )
}

export default Blogs
