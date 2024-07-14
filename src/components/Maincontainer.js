import React, { useEffect, useState } from 'react';
import { youtube_api } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Embedvideo } from './Embedvideo';

export const Maincontainer = () => {
  const [data, setData] = useState(null);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch(youtube_api);
      const json = await res.json();
      setData(json);
    };

    fetchdata();
  }, []);

  return (
    <div className="flex flex-wrap p-2 mt-10 lg:ml-14 sm:mr-2">
      {data?.items?.map((i) => (
        <Link key={i.id} to={`/detailpage/${i.id}`} className="m-2">
          <div
            className="relative w-[381px] h-[237px] rounded-lg overflow-hidden"
            onMouseEnter={() => setHoveredVideoId(i.id)}
            onMouseLeave={() => setHoveredVideoId(null)}
          >
            {hoveredVideoId === i.id ? (
              <Link  to={`/detailpage/${i.id}`}>
                <div>
               <Embedvideo videoid={i.id} classname='rounded-lg m-2 w-[381px] h-[237px] hover:scale-95 cursor-pointer transition-transform'/></div>
              </Link>
            ) : (
              <img
                src={i.snippet.thumbnails.maxres?.url}
                alt={i.snippet.title}
                className="w-full h-full object-cover hover:scale-95 cursor-pointer transition-transform"
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
