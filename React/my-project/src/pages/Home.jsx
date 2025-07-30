import React from 'react'

function Home() {
  return (
      <div className='flex h-screen overflow-hidden' >
        <div className='w-1/3 bg-blue-200 '>
                Jaydip Changani
        </div>
       
     
        <div className='w-2/3 overflow-y-auto bg-green-200'>
            Right
        <div class="h-[1000px]">Content 1...</div>
        <div class="h-[1000px]">Content 2...</div>
        <div class="h-[1000px]">Content 3...</div>
       
      </div>
      </div>
        
  )
}

export default Home
