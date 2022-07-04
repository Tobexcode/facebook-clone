import { useSession } from 'next-auth/react'
import React, { SVGProps } from 'react'


function HeaderRow({Icon, src, title, onClick}) {
    const { data: session } = useSession()
  return (
    <div onClick={() => onClick?.()}  className='flex  cursor-pointer items-center space-x-2 px-4 rounded-full hover:bg-gray-100 transition-all duration-200 group'>
    {!session && (<Icon className='h-6 w-6 ' />)}
        <p className='hidden md:inline-flex group-hover:text-twitter text-base t lg:text-xl'>{title}</p>
    </div>
  )
}

export default HeaderRow