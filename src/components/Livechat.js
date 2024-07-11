import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'

export const Livechat = ({showchat}) => {
  return (
  <>
    <div className='h-[360px] m-2 lg:ml-10 border mt-4 w-[380px] rounded-md transition-transform ease-in-out overflow-y-scroll  relative'>
        <div className='flex shadow-md rounded-md justify-between fixed bg-white w-[378px]'>
             <p className='font-sans p-2 m-2 text-md '>Top chat <FontAwesomeIcon icon={faAngleDown}  className='text-gray-500   text-xl '/></p>
             <FontAwesomeIcon icon={faClose}  className='mt-4 text-gray-500 font-extralight cursor-pointer text-2xl mr-3' onClick={()=>showchat(false)}/>

        </div>
        <div className=' '>
              {
                data.map((i) =>(

                  <div key={i.id} className='flex '>
                        <img src={i.profilepic} className='rounded-full  m-1 p-1'/>
                         <p className='text-gray-500 m-1 p-1'>{i.name}</p>
                         <p className='p-1 m-1  font-normal '>{i.comments}</p>
                    </div>
                ))
              }
        </div>
    </div>
  </>
  )
}


// ds 

var data = [
  {
    id : "xxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : ' ​​🎵🎶lofiLofisleep'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like t'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : ' ​​🎵🎶lofiLofisleep'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : ' ​​🎵🎶lofiLofisleep'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : ' ​​🎵🎶lofiLofisleep'
  },
  {
    id : "xsxx",
    name : 'subash',
    profilepic : 'https://yt4.ggpht.com/h-HyhxviwullhJqCAg_tPL0vRGqhHnMD5DZ8ILtJkJZShNXF8OwB30K-mM4ggqrJZ5MnsVE8=s32-c-k-c0x00ffffff-no-rj',
    comments : 'i like this video'
  }
] 

console.log(data.length)
