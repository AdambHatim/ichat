'use client'

import React from 'react'
import SearchBar, {SearchBarProps} from '@/components/SearchBar'
import { ArrowLeft, Search } from 'lucide-react'
import {useState} from 'react'

/*
const SearchBarArrow: React.FC<SearchBarProps>= ({isArrow, onClick}) => {
  return (
    <div>
    {isArrow ?

    <div className='flex flex-row gap-3'>
        <div className='flex justify-center items-center hover:bg-gray-100 rounded-full'>
        <ArrowLeft onClick={()=>onClick(isArrow)}/>
        </div>
        <div className= 'p-2 bg-gray-100 rounded-full w-full' >
      <div className='flex flex-row'>
      <Search className = 'bg-gray-100 text-gray-500'/>
      <input type="text" className = 'outline-none flex-1 bg-gray-100'></input>
      </div>
    </div>
    </div> :

    <div className = 'p-2 bg-gray-100 rounded-full w-full' >
      <div className = 'flex flex-row gap-2 '>
      <Search className = 'bg-gray-100 text-gray-500'/>
      <input type="text" className = 'outline-none flex-1 bg-gray-100' onClick={()=>onClick(isArrow)}></input>
      </div>
    </div>
}
</div>
  )
}
*/

type WidthType = 'w-full space-x-2' | 'w-full';
const SearchBarArrow = () => {
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
        <input type="text" className = 'outline-none flex-1 bg-gray-100 w-full' onClick={()=>SearchBarClick()}></input>
      </div>

    </div>
  )
}

export default SearchBarArrow