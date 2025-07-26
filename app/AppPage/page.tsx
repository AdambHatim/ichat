import React from 'react'
import SearchBar from '@/components/SearchBar'
import SearchBarArrow from '@/components/SearchBarArrow'
import ContactIcon from '@/components/ContactIcon'
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

