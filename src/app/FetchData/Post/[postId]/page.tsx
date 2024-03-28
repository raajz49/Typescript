'use client';

import SkeletonCard from '@/app/loading';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;

}
const FetchPost = ({ params }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const id= params.postId;

  useEffect(() => {

   const fetchData =async()=>{
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      setData(await response.json());
      setLoading(false);
    };
    fetchData();
  },
    []);

  return(
      <div>
         <h1 className="text-2xl text-red-600 font-serif mb-2 mt-20  ">
          Post User : {id}
            </h1>
            {(loading)?(

              <SkeletonCard />
            ):(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {
              data.map((post:Post)=>(
                  <div key={post.id}>
                      <Link href={`/FetchData/Comments/${post.id}/`}>
                        <div className='bg-gray-300 p-4 dark:text-black'>
                       <h1 className='underline font-serif font-bold text-2xl'>Post:{post.id}</h1>
              <p className="underline font-bold font-sans">Title</p>
              <h1>{post.title}</h1>
              <p className="underline font-bold font-sans"> Body</p>
              <h1>{post.body}</h1>
      
              </div>
              </Link>
            
                 
                  </div>
              ))}
          </div>
          )}
      </div>
  );
};

export default FetchPost;