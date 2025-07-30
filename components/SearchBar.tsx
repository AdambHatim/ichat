'use client'

import React from 'react'
import { ArrowLeft, Search } from 'lucide-react'
import {useState} from 'react'


type WidthType = 'w-full space-x-2' | 'w-full';

interface SearchBarProps {
  onChange: (stringEntered: string) => void
  str_tapped: string;
}
const SearchBar: React.FC<SearchBarProps> = ({onChange, str_tapped}) => {
  const [length, setLength] = useState<WidthType>('w-full')
  const [isArrow, setIsArrow] = useState<boolean>(false)

  const ArrowClick = () => {
    setIsArrow(false)
    setLength('w-full')
  }

  const SearchBarClick = () => {
    setIsArrow(true)
    setLength('w-full space-x-2')
    
  }
  return (
    <div className='flex flex-row gap-2'>
    {
      isArrow && 
        <div className='flex justify-center items-center hover:bg-gray-100 rounded-full w-10' onClick={()=>ArrowClick()}>
        <ArrowLeft />
        </div>
    }

      <div className = {`flex flex-row gap-2 p-2 bg-gray-100 rounded-full ${length}`} >
        <Search className = 'bg-gray-100 text-gray-500'/>
        <input type="text" className = 'outline-none flex-1 bg-gray-100 w-full' onClick={()=>SearchBarClick()} onChange={(e)=>onChange(e.target.value)} value={str_tapped}></input>
      </div>

    </div>
  )
}

export default SearchBar