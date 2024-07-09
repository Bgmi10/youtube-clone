import React, { useEffect, useState } from 'react'
import { youtube_api } from '../utils/constants'



export const Maincontainer = () => {

  const [data , setData] = useState(null)


  useEffect(()=>{
    const fetchdata = async () =>{

      const res =  await fetch(youtube_api)
      const json = await res.json()
      setData(json)

      

    }

    fetchdata()
  },[])

  

  
  return (
    
   <>
 
     <div className=' flex  flex-wrap   p-2 mt-10  lg:ml-14 sm: mr-2 ' >
         {
            data?.items?.map((i)=>(
              <div key={i.id} className=' '>

                 <img src= {i.snippet.thumbnails.maxres?.url}  className='rounded-lg m-2   w-[381px] h-[237px] hover:scale-95 cursor-pointer transition-transform'/>
                 {/* <div className="bg-white p-8 rounded-md text-black text-center max-w-screen-md w-full customBreakWords">
                    <span className=' break-words whitespace-normal'> {i.snippet.title}</span> 
                 </div> */}
               
                </div>
            ))
         }
     </div>
     
   </>
  )
}

