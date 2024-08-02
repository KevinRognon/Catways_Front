import React from 'react'

export default function ShowButton({onClick, text}) {
  return (
    <button onClick={onClick} className="bg-blue-700 text-white px-4 rounded-full py-2 hover:bg-blue-600">{text}</button>
  )
}
