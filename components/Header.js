import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession, signIn, signOut } from "next-auth/react"
import HeaderRow from './HeaderRow';




function Header() {
  const { data: session } = useSession();



  
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:p-5 shadow-md'>
      <div className="flex items-center">
        <Image src="https://links.papareact.com/5me" alt="" width={40} height={40} layout="fixed" />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className='h-6 text-gray-600' />
          <input className='hidden md:inline-flex ml-2 flex-shrink items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder='Search Facebook' />
        </div>
      </div>

      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className='flex items-center sm:space-x-2 justify-end cursor-pointer'>

      {/* session.map(userInfo)(

      ) */}
      <div className='flex  cursor-pointer items-center py-2  px-1 rounded-full hover:bg-gray-100 transition-all duration-200 group'>
      {session && (
       <Image
      onClick={session ? signOut : signIn}
      className="rounded-full cursor-pointer group"
      src={session?.user?.image}
      width="30"
      height="30"
      layout="fixed"
      alt=""
    /> 
      )}
      <HeaderRow Icon={UserIcon} onClick={session ? signOut : signIn} title={session ? session?.user?.name : 'Sign In'}/>
      </div>
      
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>



  )
}

export default Header

export async function getServerSideProps(context) {

 
}
