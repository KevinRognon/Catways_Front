import React from 'react'

export default function GreenButton({onClick, text}) {
  return (
    <button onClick={onClick} className="bg-green-700 text-white px-4 w-1/3 py-2 hover:bg-green-600">{text}</button>
  )
}
