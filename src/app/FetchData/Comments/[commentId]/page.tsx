'use client';

import SkeletonCard from '@/app/loading';
import React, { useState, useEffect } from 'react';

interface Comments {
    postId: number;
    id: number;
    name: string;
    body: string;
}

const FetchComments = ({ params }: any) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const id = params.commentId;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            setData( await response.json());
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl text-red-600 font-serif mb-4 mt-20 dark:text-white ">
                Comments - Post {id}
            </h1>
            {(loading) ? (

                <SkeletonCard />
            ) :(
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 dark:text-black">
                {data.map((comment: Comments) => (
                    <div key={comment.id} className="bg-gray-300 p-4">
                        <p className="underline font-sans font-bold text-2xl">Comment {comment.id}</p>
                        <p className="underline font-bold">Name</p>
                        <p>{comment.name}</p>
                        <p className="underline font-bold font-serif">Body</p>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
            )}
           
        </div>
       
    );
};

export default FetchComments;
