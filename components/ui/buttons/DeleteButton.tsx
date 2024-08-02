import React from 'react'

export default function DeleteButton({onClick, text}) {
  return (<button onClick={onClick} className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-500">{text}</button>
  )
}
