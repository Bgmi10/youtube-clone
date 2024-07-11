import React from 'react'

export const Embedvideo = ({videoid}) => {
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
    </div>
  )
}

