import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api_key } from '../utils/constants'
import { Embedvideo } from './Embedvideo'

export const Detailpage = () => {

    const {id} = useParams()
    const [data , setData]  = useState(null)
    

    const fetch_data = async() =>{
        
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`)

        const json = await res.json()

        setData(json)
    }
    
    useEffect(() =>{
           fetch_data() 
    },[])

    function formatViews(number) {
        if (number >= 1e9) {
          return (number / 1e9).toFixed(1) + 'B';
        } else if (number >= 1e6) {
          return (number / 1e6).toFixed(1) + 'M';
        } else if (number >= 1e3) {
          return (number / 1e3).toFixed(1) + 'K';
        } 
      }

      
  return (
    <div>
          <Embedvideo videoid={id}/>
          <div>
              <p className='sm: m-3 font-normal text-2xl lg:ml-20 mt-2'>{data?.items?.[0].snippet.title}</p>

              <p className='text-gray-300 sm: ml-10'>{formatViews(data?.items?.[0].statistics.viewCount)}</p>
          </div>
    </div>
  )
}
