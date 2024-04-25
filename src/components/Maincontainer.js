import React, { useEffect } from 'react'
import { youtube_api } from '../utils/constants'



export const Maincontainer = () => {

  useEffect(()=>{
    const fetchdata = async () =>{

      const data =  await fetch(youtube_api)
      const response = await data.json()
      console.log(response)


    }

    fetchdata()
  })
  return (
    <div className="">
     
      
    </div>
  )
}
