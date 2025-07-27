import React from 'react'
import SearchBar from '@/components/SearchBar'
import SearchBarArrow from '@/components/SearchBarArrow'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'
import Contacts, {ContactIconPropsLists} from '@/components/Contacts'
/*
export const page = () => {
  return (
    <div className='bg-white w-full h-full'>
        <SearchBarArrow/>
    </div>
  )
}

export default page
*/

/*
const url: string = "Taha.png"
const name: string = "Taha Hatim"
const text: string = "Jib lia parfum"
const page = () => {
  return (
    <div className = 'w-full h-full flex items-center justify-center'>
      <ContactIcon url={url} name={name} text={text}/>
    </div>
  )
}

export default page
*/  

const Contact_list :ContactIconProps[] = [
    {
    url: 'chi.jpg',
    name: 'chi',
    text: 'Ana sift lik wahd tmrin'
    },
    
    {
    url: 'Edward.jpeg',
    name: 'Edward',
    text: 'chri lia Parfum',
    },

    {
    url: 'logo.png',
    name: 'ichat',
    text: 'Hi new user',
    },

    {
      url: 'Mamadou.jpeg',
      name: 'Mamadou',
      text: 'Jib lia marlboro'
    }
    ]
const page = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
     <Contacts List_contacts={Contact_list}/>

    </div>
  )
}

export default page
