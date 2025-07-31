import React from 'react'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'

export interface ContactProps {
  List_contacts: ContactIconProps[];
  id_clicked: number;
  onClick: (contact: ContactIconProps) => void
}


const Contacts: React.FC<ContactProps> = ({List_contacts,id_clicked, onClick}) => {
  return (
    <div className = 'overflow-y-scroll w-full h-4/5 mt-2'>
      {List_contacts.map((contact, index) => (
        (id_clicked == index) ?
        <div key={index} onClick={() => onClick(contact)} className = 'bg-gray-100'>
        <ContactIcon id={contact.id} url={contact.url} name={contact.name} text={contact.text}/>
        </div>:

        <div key={index} onClick={() => onClick(contact)} >
        <ContactIcon id={contact.id} url={contact.url} name={contact.name} text={contact.text}/>
        </div>
        



      ))}
    </div>
  )
}

export default Contacts