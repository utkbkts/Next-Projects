import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-20 bg-gray-700 text-gray-300 items-center flex justify-center gap-4'>
        <p>All rights reserved <Link target="_blank" href="https://github.com/utkbkts">utkbktss/</Link></p>
    </div>
  )
}

export default Footer