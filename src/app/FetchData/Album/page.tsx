
'use client'

import SkeletonCard from '@/app/loading';
// import { Skeleton } from "@/components/ui/skeleton"
import Link from 'next/link';
import React, { useState ,useEffect} from 'react';

interface Album {
    userId: string;
    id: string;
    title: string;
}

const FetchAlbum =  () => {

    const [loading, setLoading] = useState(true);
     const [data, setData] = useState([]);
     useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            // const jsonData = await response.json();
            setData( await response.json());
            setLoading(false); // Set loading state to false after data fetching is complete
        };

        fetchData();
    }, []);
    return (    
        <div className="px-4 py-8 bg-white dark:bg-black mt-10">
            <h1 className="text-2xl font-bold mb-4 mt-3">Albums</h1>
            
            {(loading) ? (
            //    <div className="flex flex-col space-y-3 w-full bg-red-500 h-screen">
            //    <Skeleton className="h-[125px] w-[250px] rounded-xl bg" />
            //    <div className="space-y-2">
            //      <Skeleton className="h-4 w-[250px]" />
            //      <Skeleton className="h-4 w-[200px]" />
            //    </div>
            //  </div>
                   <SkeletonCard />
                   
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                    {data.map((album: Album) => (
                        <div key={album.id} className='bg-blue-300 dark:bg-white dark:text-black p-4'>
                            <Link href={`/FetchData/Photogallery/${album.id}`} className='p-full'>
                                <h2 className="text-lg font-semibold mb-2">{album.id}</h2>
                                <p>{album.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FetchAlbum;