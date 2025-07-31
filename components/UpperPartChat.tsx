import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {Phone, Video, MoreHorizontal, ArrowLeft} from 'lucide-react'



interface UpperPartChatProps {
  isMobile: boolean;
  isPopUpScreen: boolean;
}

const UpperPartChat: React.FC<UpperPartChatProps> = ({isMobile, isPopUpScreen}) => {
  return (
    <div className='flex flex-row justify-between px-5 py-5 border-b border-gray-300'>
      {isMobile ? (
        <div className = 'flex flex-row gap-4'>
          <div className = 'flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 mt-1'>
            <ArrowLeft />
          </div>
          <div>
            <Avatar className = 'w-12 h-12'>
            <AvatarImage src = 'chi.jpg'/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        <div className = 'flex justify-center items-center font-bold'>Adam Hatim</div>
      </div>
      ):(
              <div className = 'flex flex-row gap-4'>
        <div>
            <Avatar className = 'w-12 h-12'>
            <AvatarImage src = 'chi.jpg'/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
        <div className = 'flex justify-center items-center font-bold'>Adam Hatim</div>
      </div>
      )}

      
      <div className = 'flex flex-row gap-2'>
        <div className = 'flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 mt-1'>
          <Phone />
        </div>

        <div className = 'flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 mt-1'>
          <Video />
        </div>

        <div className = 'flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 mt-1'>
          <MoreHorizontal />
        </div>
      </div>
    </div>
  )
}

export default UpperPartChat