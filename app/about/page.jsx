
"use client";
import { Roboto } from 'next/font/google';
const roboto = Roboto({subsets:["latin"],weight:"500"})

import React from 'react'

const About = () => {
  console.log(process.env.JWT_SECRET)
  return (
    <div>
      <h1>This is about page</h1>
      <h2 className={roboto.className}>This is different font</h2>
    </div>
  )
}

export default About 