import React, { useEffect, useState } from 'react'
import { api_key } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = ({query , focus}) => {

    const [data , setData] = useState(null)

    
    
    const fetch_data  = async () =>{
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${query}&key=${api_key}`)
        const json = await res.json()
        
        
        setData(json)
    }

    useEffect(() =>{
         const t = setTimeout(() => {
            fetch_data()
         }, 200);

         return () => clearTimeout(t)
        
    },[query])
  return (
    <>
   {query.length >=1 && focus &&  <div className='justify-center flex '>
    <div className=' border p-2 lg:w-[450px] h-[400px] absolute bg-white rounded-md lg:mt-1 lg:mr-[500px]  sm: mr-72 sm: w-[400px] sm: mt-6'>
        {
           
                <div >
                    <ol>
                        <li className='shadow-sm p-2 font-thin '>
                           <FontAwesomeIcon icon={faSearch}  className='text-gray-400 '/> asdas
                        </li>
                        
                    </ol>
                </div>
        
        }
    </div>
    </div>}
    </>
  )
}