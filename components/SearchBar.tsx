'use client'

import React from 'react'
import { useState } from 'react'
import {Search } from 'lucide-react';
const Friends: string[] = ["Adam", "Taha Hatim", "saif", "samira", "Abdedaim el Ghadbane"];


interface SearchBarProps{
    width?: string,
}
/*
const SearchBar: React.FC<SearchBarProps> = ({ width = "w-64" }) => {

  return (
    <div className={`p-2 bg-white rounded-full ${width}`}>
      <div className='flex flex-row gap-2 w-'>
      <Search className = 'bg-white'/>
      <input type="text" className = 'outline-none flex-1'></input>
      </div>
    </div>
  )
}

export default SearchBar
*/

const SearchBar: React.FC<SearchBarProps> = () => {

  return (
    <div className= 'p-2 bg-gray-100 rounded-full min-w-60 max-w-96 w-full' >
      <div className='flex flex-row gap-2 '>
      <Search className = 'bg-gray-100'/>
      <input type="text" className = 'outline-none flex-1 bg-gray-100'></input>
      </div>
    </div>
  )
}

export default SearchBar