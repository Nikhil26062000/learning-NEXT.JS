import Image from 'next/image'
import React from 'react'
import myImage from '@/public/Pic1.jpg'

const Portfolio = () => {
  return (
    <div>this is Portfolio
    <Image src={myImage} alt="Portfolio" width="500" height="500"/>
    </div>
  )
}

export default Portfolio

export const generateMetadata =()=>{
  return{
    title: 'Portfolio',
    description:'All about the portfolio'
  }
}