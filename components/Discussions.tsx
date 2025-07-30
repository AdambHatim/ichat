'use client'

import React from 'react'
import Contacts from './Contacts'
import {ContactIconProps} from './ContactIcon'
import SearchBar from './SearchBar'
import SearchBarArrow from './SearchBar'
import { useState } from 'react'
import {ContactProps} from './Contacts'

/* this is the final component for Discussions, he will be on the left of the page, as a prop he only takes your 
Contacts, you will see a lot of discussions, when clicking on the search bar your contacts will appear, we
also need to keep track of the contacts clicked, this should be a huge component that summarises all the ones 
before
*/

export interface DiscussionsProps{
    Contacts: ContactIconProps[];
    id_clicked: number | false;
    onClick: (id: number) => void;
}
const Discussions: React.FC<ContactProps> = ({List_contacts, id_clicked, onClick}) => {
  
  return (
    <div className = 'w-full h-full min-w-20 max-w-md bg-white rounded-xl p-6 gap-3' >
      <SearchBarArrow/>
      <div className='text-lg font-bold my-2'> Contacts</div>
      <Contacts List_contacts = {List_contacts} id_clicked={id_clicked} onClick={onClick}/>

    </div>
  )
}

export default Discussions