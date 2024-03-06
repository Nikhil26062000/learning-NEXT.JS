import { redirect } from 'next/navigation'
import React from 'react'

const CustomarID = ({params}) => {
  if(params.id == 4){
    redirect("/portfolio")
}
  return (
    <div>
     
        <h2>ID is : {params.id}</h2>
    </div>
  )
}

export default CustomarID