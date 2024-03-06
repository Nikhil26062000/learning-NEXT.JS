"use client" // if we want to make any component as client component. By default all components in next.js are server component

import React from 'react'

const ClientSide = () => {
    console.log("This is client component")
  return (
    <div>this is a client side</div>
  )
}

export default ClientSide