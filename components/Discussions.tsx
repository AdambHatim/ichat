'use client'

import React from 'react'
import Contacts from './Contacts'
import {ContactIconProps} from './ContactIcon'
import SearchBar from './SearchBar'
import SearchBarArrow from './SearchBar'
import { useState, useEffect } from 'react'
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

function WordsBeginStr(str: string, List_contacts:ContactIconProps[]){
    const new_str = str.toLowerCase()
    const new_List_contacts:ContactIconProps[] = []
    const str_length:number = new_str.length
    for (const contacts of List_contacts){
      const name = contacts.name.toLowerCase()
      if (name.length >= str_length && name.slice(0,str_length) === new_str){
          new_List_contacts.push(contacts)
      }
    }
    return new_List_contacts
}
const Discussions: React.FC<ContactProps> = ({List_contacts, id_clicked, onClick}) => {
  const [wordTapped, setWordTapped] = useState<string>('')
  const [contacts, setContacts] = useState<ContactIconProps[]>(List_contacts)


  const onChange = (str: string) => {
    setWordTapped(str)
    const new_contacts_list:ContactIconProps[] = WordsBeginStr(str, List_contacts)
    setContacts(new_contacts_list)
  }
  useEffect(()=>{
    console.log(wordTapped)}, [wordTapped])
  return (
    <div className = 'w-full h-full min-w-20 max-w-md bg-white rounded-xl p-6 gap-3' >
      <SearchBar onChange={onChange} str_tapped={wordTapped}/>
      <div className='text-lg font-bold my-2'> Contacts</div>
      <Contacts List_contacts = {contacts} id_clicked={id_clicked} onClick={onClick}/>

    </div>
  )
}

export default Discussions