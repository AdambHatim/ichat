import React from 'react'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'

export interface ContactIconPropsLists {
  List_contacts: ContactIconProps[]
}


const Contacts: React.FC<ContactIconPropsLists> = ({List_contacts}) => {
  return (
    <div>
      {List_contacts.map((contact, index) => (
        <ContactIcon key={index} url={contact.url} name={contact.name} text={contact.text} />
      ))}
    </div>
  )
}

export default Contacts