"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div>
        <ul className='flex gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/portfolio"><li>Portfolio</li></Link>
            <Link href="/about/user"><li>User</li></Link>
            <Link href="/dummydata"><li>DummyData</li></Link>
        </ul>

        {pathName=="/about"?(
          <button className="p-2 m-1 bg-blue-500 rounded-md">Inside about</button>
        ):(
          <button className="p-2 m-1 bg-blue-500 rounded-md">outside about page</button>
        )}
    </div>
  )
}

export default Navbar