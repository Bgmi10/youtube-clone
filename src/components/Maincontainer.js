import React, { useEffect, useState } from 'react'
import { youtube_api } from '../utils/constants'
import {Link, useParams} from 'react-router-dom'



export const Maincontainer = () => {

  const [data , setData] = useState(null)
  console.log(data)

   

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
               <Link key={i.id} to={`/detailpage/${i.id}`}>
              <div >

                 <img src= {i.snippet.thumbnails.maxres?.url}  className='rounded-lg m-2   w-[381px] h-[237px] hover:scale-95 cursor-pointer transition-transform'/>
                 <div className="bg-white p-8 rounded-md text-black text-center max-w-screen-md w-full ">
                  {i.snippet.title}
                 </div>
               
                </div>
                </Link> 
            ))
         }
     </div>
     
   </>
  )
}

