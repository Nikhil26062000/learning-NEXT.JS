"use client";

import React from 'react'

const AllRoute = ({params}) => {
  return (
    <div>
    <h1>These are the all routes</h1>

    {params.all.map((p)=>{
           return <li key={p}>{p}</li>
        })}

      
    
    </div>
  )
}

export default AllRoute