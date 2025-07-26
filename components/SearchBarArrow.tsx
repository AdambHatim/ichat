import React from 'react'
import SearchBar from '@/components/SearchBar'
import { ArrowLeft } from 'lucide-react'

interface SearchBarStateProps{
    width?: string;
}
const SearchBarArrow: React.FC = () => {
  return (
    <div className='flex flex-row gap-1'>
        <div className='flex justify-center items-center w-10 hover:bg-gray-100 rounded-full'>
        <ArrowLeft />
        </div>
        <SearchBar/>
    </div>
  )
}

export default SearchBarArrow