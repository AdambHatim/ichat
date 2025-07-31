import React from 'react'
import UpperPartChat from './UpperPartChat'
const ChatArea = () => {
  return (
    <div className = 'w-full h-full bg-white rounded-xl'>
        <UpperPartChat isMobile = {false} isPopUpScreen = {false} />
    </div>
  )
}

export default ChatArea