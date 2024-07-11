import React from 'react'

export const Embedvideo = ({videoid , data}) => {

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
         <iframe
        id="youtube-video"
        src={`https://www.youtube.com/embed/${videoid}`}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
        className='lg:ml-20 lg:mt-4 rounded-md lg:w-[640px] lg:h-[360px] sm: w-[400px] sm: ml-2 sm: h-[230px] sm: mt-[30px]'
      ></iframe>
       <div>
              <p className='sm: m-3 font-normal text-2xl lg:ml-20 mt-2'>{data?.items?.[0].snippet.title}</p>

              <p className='text-gray-300 sm: ml-10'>{formatViews(data?.items?.[0].statistics.viewCount)}</p>
          </div>
    </div>
  )
}

