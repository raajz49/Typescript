'use client';
 
import SkeletonCard from '@/app/loading';
import React, { useState, useEffect } from 'react';

interface Photo{
        albumId:number;
        id:number;
        title:string;
        url:string;
        thumbnailUrl:string;
}
    
const FetchComments= ({ params }:any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const  id  = params.photoId;

  useEffect(()=>{
    const fetchData = async () => {
  
  const response= await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
          setData(await response.json());
          setLoading(false);
};
fetchData();
}, []);

  return(
    
       <div className="px-4 py-20 bg-white dark:bg-black ">
    <h1 className="text-2xl text-red-600 font-serif mb-4 dark:text-white">
          Photos - Album: {id}
            </h1>

            {(loading) ? (

  <SkeletonCard />
) :(

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 ">
     {data.map((photo:Photo,id:number)=>(
      <div key={id} className="bg-blue-400 dark:bg-gray-300 dark:text-black" >
     
      <h1>{photo.id}</h1>
      <p className="underline">Title</p>
      <h1>{photo.title}</h1>
      <img src={photo.thumbnailUrl} className="width-50 " alt={photo.title}  />
 
    </div>

     ))} 
    </div>
       )}
           
      </div>
  )
  
}

export default FetchComments