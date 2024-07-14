import React from 'react'
import { Commentsection } from './Commentsection';

export const Embedvideo = ({videoid , data , classname}) => {

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
    <>
    <div className='flex flex-col'>
         <iframe
        id="youtube-video"
        src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=true`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
       
        title="YouTube video player"
        className={classname}
      ></iframe>
       <div>
              <p className='sm: m-3 font-normal text-2xl lg:ml-20 mt-2'>{data?.items?.[0].snippet.title}</p>

              <p className='text-gray-300 sm: ml-10'>{formatViews(data?.items?.[0].statistics.viewCount)}</p>
          </div>
         
    </div>
   
    </>
  )
}



// 