'use client'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import SearchBarArrow from '@/components/SearchBar'
import ContactIcon, {ContactIconProps} from '@/components/ContactIcon'
import Contacts, {ContactIconPropsLists} from '@/components/Contacts'
import Discussions, {DiscussionsProps} from '@/components/Discussions'


const onClick = (id:number) => {}
const Contact_list: ContactIconProps[] = [
  {
    id: 0,
    url: 'chi.jpg',
    name: 'chi',
    text: 'Ana sift lik wahd tmrin',
    onClick: onClick,
  },
  {
    id: 1,
    url: 'Edward.jpeg',
    name: 'Edward',
    text: 'chri lia Parfum',
    onClick: onClick,
  },
  {
    id: 2,
    url: 'logo.png',
    name: 'ichat',
    text: 'Hi new user',
    onClick: onClick,
  },
  {
    id: 3,
    url: 'Mamadou.jpeg',
    name: 'Mamadou',
    text: 'Jib lia marlboro',
    onClick: onClick,
  },
  {
    id: 4,
    url: 'edward.jpeg',
    name: 'Sophie',
    text: 'Did you see the latest episode?',
    onClick: onClick,
  },
  {
    id: 5,
    url: 'edward.jpeg',
    name: 'Liam',
    text: 'Let’s catch up this weekend.',
    onClick: onClick,
  },
  {
    id: 6,
    url: 'edward.jpeg',
    name: 'Ava',
    text: 'Don’t forget the meeting at 3!',
    onClick: onClick,
  },
  {
    id: 7,
    url: 'edward.jpeg',
    name: 'Noah',
    text: 'I sent the files over.',
    onClick: onClick,
  },
  {
    id: 8,
    url: 'edward.jpeg',
    name: 'Olivia',
    text: 'Happy Birthday! 🎉',
    onClick: onClick,
  },
  {
    id: 9,
    url: 'edward.jpeg',
    name: 'Mason',
    text: 'Can you call me when you’re free?',
    onClick: onClick,
  },
  {
    id: 10,
    url: 'edward.jpeg',
    name: 'Emma',
    text: 'Loved your post today!',
    onClick: onClick,
  },
  {
    id: 11,
    url: 'edward.jpeg',
    name: 'Lucas',
    text: 'Let’s start the project tomorrow.',
    onClick: onClick,
  },
  {
    id: 12,
    url: 'edward.jpeg',
    name: 'Isabella',
    text: 'Lunch at 1?',
    onClick: onClick,
  },
  {
    id: 13,
    url: 'edward.jpeg',
    name: 'James',
    text: 'Great job on the demo!',
    onClick: onClick,
  }
];

const Discussions_variables: DiscussionsProps = {
    Contacts: Contact_list,
    id_clicked: 0,
    onClick: onClick,

}
const page = () => {
  return (
    <div className='flex w-full h-full py-7 pl-5'>
      <Discussions Contacts={Contact_list} id_clicked={0} onClick={onClick}>



      </Discussions>
    </div>
  )
}

export default page