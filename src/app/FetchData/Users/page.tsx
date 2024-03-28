'use client'

import SkeletonCard from '@/app/loading';
import Link from 'next/link';

import React, { useState ,useEffect} from 'react';

interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface Users{
    id:number;
    name:string;
    email:string;
    address:Address;
}   


const FetchUser =  () => {

    const [loading, setLoading] = useState(true);
     const [data, setData] = useState([]);
     useEffect(() => {
const FetchData= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
            setData(await response.json());
            setLoading(false);
        };

        FetchData();
    }, []);
    return(
        <div className='mt-20'>
            <h1 className="text-2xl text-red-600 font-serif  mb-4">Users</h1>

            {(loading) ? (
                <SkeletonCard />
                   
                 ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {
                data.map((user:Users)=>(
                    <div key={user.id}>
                         <Link href={`/FetchData/Post/${user.id}/`} >
                            <div className='dark:bg-gray-300  dark:text-black p-3'>
                          <p className='mb-2'><strong className=''>Name:</strong> {user.name}</p>
            <p className='mb-2'><strong className=''>Email:</strong> <span className='italic'>{user.email}</span></p>
            <p className='mb-2'><strong className=''>City:</strong> <span className=''>{user.address.city}</span></p>
                    </div>
            </Link>
          
                    </div>
                ))}
            </div>
                 )}
        </div>
    )
}

export default FetchUser