import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars,faSearchPlus, faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from './Sidebar';
import {useDispatch} from 'react-redux'
import { toggelmenu } from '../utils/menuslice';
import { SearchBar } from './SearchBar';

export const Header = () => {

  const [isopen , setisopen] = useState(false)
  const [query , setQuery] = useState('')
  const dispatch = useDispatch()
  const [focus , setFocus]  = useState(false)
  

  const hamburgerclick = () =>{
    setisopen(!isopen)
    dispatch(toggelmenu())
    
  }
  return (
    <>
    <div className='flex justify-between items-center shadow-md py-2 px-4 md:px-6 lg:px-8'>
     
     <div className='flex items-center space-x-4'>
        
        <FontAwesomeIcon
          icon={ !isopen ? faBars: faClose }
          className='h-5 w-5 md:h-6 md:w-6 cursor-pointer '
          aria-label='Menu'
          onClick={hamburgerclick}
        />
       
        
        <div>
        <img
          src='https://th.bing.com/th/id/OIP.YN1rl7vHsIGpwfHO3a4NigHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
          className='h-12 w-12 md:h-16 md:w-14 mr-1'
          alt='Logo'
        />

        </div>
       
      </div>

     
      <div className='flex flex-grow justify-center mx-2 sm:mx-4'>
        <input
          type='text'
          placeholder='Search'
          className='w-full max-w-xs sm:max-w-sm lg:max-w-md px-2 py-1 border rounded-md'
          onChange={e => setQuery(e.target.value)}
          onFocus={()=> setFocus(true)}

          onBlur={() => setFocus(false)}
        />
        <FontAwesomeIcon icon={faSearch}  className='mt-2 ml-2   rounded text-lg cursor-pointer text-gray-400'/>
        <div className=' mt-10  '>

            <SearchBar query={query} focus={focus}/>

         </div> 
        
      </div> 
      

      
      <div className='flex items-center space-x-4'>
        <FontAwesomeIcon
          icon={faUser}
          className='text-xl md:text-2xl mt-1 ml-2'
        />
      </div>
     
    </div>
   
    </>
  );
};

