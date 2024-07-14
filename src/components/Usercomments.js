import React from 'react'

export const Usercomments = ({data}) => {
  return (
    <div>
        {
            data.map((i , index) =>(
                <div className=' mt-5 ' key={index}>
                   <img src={i.userprofile} alt='userprofile' className='w-8 h-8 rounded-full m-2 '/>
                   <p className='m-2 text-gray-400'> {i.name}</p>
                   <p className='m-2'> {i.message}</p>
                   <div>
                   <p className='m-10  border-l-2'>
                     <Usercomments data={i.replies}/>
                    </p>
                    </div>
                </div>
            ))
         }
    </div>
    
    
  )
}
