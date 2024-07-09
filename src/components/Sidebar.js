import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGamepad, faGripLinesVertical, faHome, faMusic, faNewspaper, faPhotoVideo, faRunning, faShop, faVideo, faVideoSlash , faTruckMoving, faVial} from '@fortawesome/free-solid-svg-icons';




export const Sidebar = () => {

  const ismenuopen = useSelector((store)=> store.menu.ismenuopen)


  if(!ismenuopen) return null
  return (
    <div className='p-5 shadow-md w-40  h-[600px] ml-1 m-2  text-lg absolute bg-white rounded-md '>
       <div className=' border-b-2'>
      <ul >
      <li >
      <FontAwesomeIcon icon={faHome}  className='mr-3'/>
        Home
       
      </li>
      <li>
      <FontAwesomeIcon icon={faVideo} className='mr-3' />
        Shorts

      </li>
      <li>
      <FontAwesomeIcon icon={faPhotoVideo}  className='mr-3'/>
      
       vidoes
      </li>
      <li>
      <FontAwesomeIcon icon={faVideoSlash}  className='mr-3'/>
       Live
      </li>
     </ul>

      </div>
      <h1 className='text-lg font-medium mt-3'>subscriptions</h1>
      <div className=' border-b-2 mt-2'>
      <ul>
      <li>
      <FontAwesomeIcon icon={faMusic}  className='mr-3'/>
        Music
      </li>
      <li>
      <FontAwesomeIcon icon={faRunning}  className='mr-3'/>
        Sports

      </li>
      <li>
      <FontAwesomeIcon icon={faGamepad}  className='mr-3'/>
       Gaming
      </li>
      <li>
      <FontAwesomeIcon icon={faTruckMoving}  className='mr-3'/>
       Movies
      </li>
     </ul>

      </div>
      <h1 className='text-lg font-medium mt-3' >Watch Later</h1>
      <div className='border-b-2 mt-2 '>
      <ul>
      <li>
      <FontAwesomeIcon icon={faShop}  className='mr-3'/>
        Shopping
      </li>
      <li>
      <FontAwesomeIcon icon={faMusic}  className='mr-3'/>
        Music

      </li>
      <li>
      <FontAwesomeIcon icon={faVial}  className='mr-3'/>
       live
      </li>
      <li>
      <FontAwesomeIcon icon={faNewspaper}  className='mr-3'/>
       News
      </li>
     </ul>

      </div>
     
    </div>
  )
}
