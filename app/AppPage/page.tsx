'use client'
import React, {useState, useEffect} from 'react'
import Discussions, {DiscussionsProps} from '@/components/Discussions'
import {Contact_list} from './const'
import ChatArea from '@/components/ChatArea'


const onClick = (id:number) => {}

const Discussions_variables: DiscussionsProps = {

    Contacts: Contact_list,
    id_clicked: 0,
    onClick: onClick,

}


const page = () => {
  const [isMobile, setIsMobile] = useState<boolean>(true)
  useEffect(()=>{
    const handleSize = () => {
      setIsMobile(window.innerWidth < 768)
    };

    handleSize();

    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize);



  },[])
  return (
    <div className='flex w-full h-full py-7 pl-5'>
        {isMobile ? 
        <ChatArea/> :
        <div>
        <Discussions List_contacts={Contact_list} id_clicked={0} onClick={()=>{}} /> 
        <ChatArea />
        </div>
        }

       
        
    </div>
  )

}

export default page