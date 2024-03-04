import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex gap-5'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/portfolio"><li>Portfolio</li></Link>
            <Link href="/about/user"><li>User</li></Link>
        </ul>
    </div>
  )
}

export default Navbar