import React from 'react'
import { Sidebar } from './Sidebar'
import { Maincontainer } from './Maincontainer'






export const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar />
        <Maincontainer />
        
  
    </div>
  )
}
