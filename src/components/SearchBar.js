import React, { useEffect, useState } from 'react'
import { api_key } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { cacheresults } from '../utils/cacheslice'


export const SearchBar = ({query , focus}) => {

    const [data , setData] = useState(null)

    const [cachedata , setCachedata] = useState({})

    const cacheresults1 = useSelector(store => store.cacheresults)
    
    
    const dispatch = useDispatch()
    
    
    const fetch_data  = async () =>{
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&&regioncode=en&q=${query}&key=${api_key}`)
        const json = await res.json()
        
        setData(json)

        dispatch(cacheresults({[query] : json}))
    }

    useEffect(() =>{
         const t = setTimeout(() => {

            if(cacheresults1[query]){
                setData(cacheresults1[query])
            }
            else{
            fetch_data()
            }
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
                        {data.items.map((i) =>(
                              <li className='shadow-sm p-2 font-thin ' key={i.etag}>
                              <FontAwesomeIcon icon={faSearch}  className='text-gray-400 '/> {i.snippet.title}</li>
                           ))}
                       
                        
                    </ol>
                </div>
        
        }
    </div>
    </div>}
    </>
  )
}