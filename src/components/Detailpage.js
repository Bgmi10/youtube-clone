import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api_key } from '../utils/constants'
import { Embedvideo } from './Embedvideo'
import {Livechat} from './Livechat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Commentsection } from './Commentsection'

export const Detailpage = () => {

    const {id} = useParams()
    const [data , setData]  = useState(null)

    const [showchat , setShowchat] = useState(false)
    

    const fetch_data = async() =>{
        
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`)

        const json = await res.json()

        setData(json)
    }
    
    useEffect(() =>{
          fetch_data()
    },[])

   
      
  return (
    <>
    <div className='flex '>
          <Embedvideo videoid={id} data={data} classname={'lg:ml-20 lg:mt-4 rounded-md lg:w-[640px] lg:h-[360px] sm: w-[400px] sm: ml-2 sm: h-[230px] sm: mt-[30px]'}/>
     {!showchat ? <p className='m-2  lg:ml-52 text-md font-normal cursor-pointer  ' onClick={()=> setShowchat(prev => !prev)}>Show chat  <FontAwesomeIcon icon={faAngleDown} /></p>
         : <Livechat showchat={setShowchat} />}
         
    </div>
    <Commentsection />
    </>
  )
}
