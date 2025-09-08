'use client';
//^ SINGLE USER PAGE
import Axios from '@/lib/axios';

import { useParams } from 'next/navigation';
import React from 'react'
import useSWR from 'swr';

const SingleUserPage = () => {
  const params = useParams();
  const singleUserFetcher = () => Axios.get(`/users/${params.id}`).then((res) => res.data);
  const { data, isLoading, error } = useSWR(`USER_${params.id}`, singleUserFetcher);

  if (isLoading || error) {
    return (
      <div className='w-screen h-screen text-2xl font-bold flex flex-col items-center justify-center'>
        LOADING
      </div>
    );
  }

  return (
    <div className='w-screen h-screen text-2xl font-bold flex flex-col items-center justify-center'>
      <div className='bg-stone-100 font-mono font-bold w-1/5 text-black px-5 py-2.5 rounded flex items-center justify-center'>
        {data?.data.id}.{data?.data.firstName} {data?.data.lastName}
      </div>
    </div>
  )
}

export default SingleUserPage