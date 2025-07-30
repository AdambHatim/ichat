import React from 'react'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'

export interface ContactProps {
  List_contacts: ContactIconProps[];
  id_clicked: number | false
  onClick: (is_clicked: number | false) => void
}


const Contacts: React.FC<ContactProps> = ({List_contacts, id_clicked, onClick}) => {
  return (
    <div className='overflow-y-scroll w-full h-4/5 mt-2'>
      {List_contacts.map((contact, index) => (
        <div key={index} onClick={() => onClick(id_clicked)}>
        <ContactIcon id={contact.id} url={contact.url} name={contact.name} text={contact.text}/>
        </div>
      ))}
    </div>
  )
}

export default Contacts