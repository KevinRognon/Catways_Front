import React from 'react'

export default function DeleteButton({onClick, text}) {
  return (<button onClick={onClick} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">{text}</button>
  )
}
