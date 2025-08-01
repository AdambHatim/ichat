import React from 'react'
import TextMessage, {TextMessageProps} from './TextMessage'

const color: string = 'bg-green-100'
const text: string = " hey! what's up "

export interface message {
  isItYou: boolean;
  message: string;
}

interface ChatProps{
  Conversation: message[];
}


const Chat: React.FC<ChatProps> = ({Conversation}) => {
  return (
    <div className = "w-full md:h-[400px] bg-[url('/chat-bg.png')] bg-repeat bg-cover bg-white px-10 py-3 overflow-y-scroll">
        {Conversation.map((message, index) => (
            (message.isItYou === true) ?
              <div key={index} className='flex justify-end'>
               <TextMessage text = {message.message} color = "bg-blue-200" />
              </div>:
              <div key={index} className='flex justify-start'>
                <TextMessage text = {message.message} color = "bg-white" />
              </div>
              )
              
            )}
    </div>
  )
}

export default Chat