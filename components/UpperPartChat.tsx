import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UpperPartChat = () => {
  return (
    <div>
        <div>
            <Avatar className='w-12 h-12'>
            <AvatarImage src = 'chi.jpg'/>
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  )
}

export default UpperPartChat