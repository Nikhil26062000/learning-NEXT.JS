'use client';

import React from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {

  const router = useRouter();

  const navigate = (page) =>{
      router.push(page);
  }
  return (
    <div>This is the Home Page of this App
    <button className="bg-green-500 border m-2 p-2" onClick={()=>navigate('about')}>About button</button>
    </div>
  )
}

export default Home