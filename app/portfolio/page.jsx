import Image from 'next/image'
import React from 'react'
import myImage from '@/public/Pic1.jpg'

const Portfolio = () => {
  return (
    <div>this is Portfolio
    <Image src={myImage} alt="Portfolio" width="500" height="500"/>
    <Image src='https://plus.unsplash.com/premium_photo-1671247953201-2fdc17af6692?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8' alt='Laptop image'
      width={300}
      height={300}
    />
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