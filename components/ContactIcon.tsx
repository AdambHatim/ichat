import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export interface ContactIconProps {
  id: number;
  url: string;
  name: string;
  text: string;
  onClick: (id: number) => void;
}
const ContactIcon: React.FC<ContactIconProps> = ({id, url, name, text, onClick}) => {
  return (
    <div className = 'bg-white hover:bg-gray-100 w-60 flex flex-row gap-2'
         onClick={()=>onClick(id)}
    >

      {/* Avatar area */}
    <div className = 'flex justify-center items-center'>
      <Avatar>
        <AvatarImage src= {url} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
     
     {/* Text area*/}
    <div>
    <div className='font-bold'>{name}</div>
    <div className='text-gray-700 text-sm'>{text}</div>
    </div>
    </div>
  )
}

export default ContactIcon