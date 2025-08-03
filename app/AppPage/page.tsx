'use client'
import React, {useState, useEffect} from 'react'
import Discussions, {DiscussionsProps} from '@/components/Discussions'
import {Contact_list} from './const'
import ChatArea from '@/components/ChatArea'
import { ContactIconProps } from '@/components/ContactIcon'


const page = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isDiscussions, setIsDiscussions] = useState<boolean>(false)

  useEffect(()=>{
    const handleSize = () => {
      setIsMobile(window.innerWidth < 768)
    };

    handleSize();

    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize);



  },[])


  const [idClicked, setIdClicked] = useState<number>(0)
  const onClick = (contact: ContactIconProps) => {
        setIdClicked(contact.id)
  }
  return (
    <div className='flex w-full h-full py-7 px-5'>
        {isMobile && isDiscussions ? (
        <Discussions List_contacts={Contact_list} id_clicked={idClicked} onClick={onClick} />
        ): isMobile && isDiscussions === false ?(
          <ChatArea />
        ):
        <div className = 'flex flex-row w-full h-full space-x-5'>
        <Discussions List_contacts={Contact_list} id_clicked={idClicked} onClick={onClick} /> 
        <ChatArea/>
        </div>
        }

       
        
    </div>
  )

}

export default page