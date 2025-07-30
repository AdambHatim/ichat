'use client'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import SearchBarArrow from '@/components/SearchBar'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'
import Contacts from '@/components/Contacts'
import Discussions, {DiscussionsProps} from '@/components/Discussions'
import {Contact_list} from './const'

const onClick = (id:number) => {}


const Discussions_variables: DiscussionsProps = {
    Contacts: Contact_list,
    id_clicked: 0,
    onClick: onClick,

}
const page = () => {

  return (
    <div className='flex w-full h-full py-7 pl-5'>
      <Discussions List_contacts={Contact_list} id_clicked={0} onClick={()=>{}}>

      </Discussions>
    </div>
  )
}

export default page