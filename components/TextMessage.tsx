import React from 'react'

export interface TextMessageProps {
    text: string;
    color: string;

}
const TextMessage: React.FC<TextMessageProps> = ({text, color}) => {
  return (
    <div className = {`p-2 ${color} w-40 rounded-lg`}>{text}</div>
  )
}

export default TextMessage