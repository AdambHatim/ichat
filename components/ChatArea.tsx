import React from 'react'
import UpperPartChat from './UpperPartChat'
import Chat from './Chat'
import {message} from './Chat'
import BottomPartChat from './BottomPartChat'
const Conversation: message[] = [
  { isItYou: false, message: "Hey! Long time no see 👋" },
  { isItYou: true, message: "Hey! Yeah, it's been a while 😅" },
  { isItYou: false, message: "How have you been?" },
  { isItYou: true, message: "Pretty good, just been super busy with work lately." },
  { isItYou: false, message: "Ah, I totally get that. Anything exciting happening?" },
  { isItYou: true, message: "Actually, yes! I’m working on a new project – a chat web app 😄" },
  { isItYou: false, message: "Oh that’s cool! What tech stack are you using?" },
  { isItYou: true, message: "React, TypeScript, and Tailwind for now. Keeping it simple at first." },
  { isItYou: false, message: "Nice, that's a solid combo. Are you using sockets for real-time updates?" },
  { isItYou: true, message: "Not yet, just mocking data for the MVP. Sockets will come later." },
  { isItYou: false, message: "Makes sense. Let me know if you want to test it together when it's ready!" },
  { isItYou: true, message: "For sure! I’ll send you the link once I have something working 🔧" },
  { isItYou: false, message: "Awesome, looking forward to it 😄" }
];

const ChatArea = () => {
  return (
    <div className = 'w-full h-full bg-white rounded-xl'>
        <UpperPartChat isMobile = {false} isPopUpScreen = {false} />
        <Chat Conversation={Conversation}/>
        <BottomPartChat />
    </div>
  )
}

export default ChatArea