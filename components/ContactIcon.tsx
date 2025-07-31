import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export interface ContactIconProps {
  id:number;
  url: string;
  name: string;
  text: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({id, url, name, text}) => {
  return (
    <div className = 'hover:bg-gray-100 w-full px-3 py-2 rounded-xl flex flex-row gap-2'>

      {/* Avatar area */}
    <div>
      <Avatar className='w-12 h-12'>
        <AvatarImage src= {url} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
     
     {/* Text area*/}
    <div className = 'flex flex-col'>
    <div className='font-bold'>{name}</div>
    <div className='text-gray-700 text-sm'>{text}</div>
    </div>
    </div>
  )
}

export default ContactIcon