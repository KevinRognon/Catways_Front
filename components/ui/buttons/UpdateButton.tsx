import React from 'react'

export default function UpdateButton({onClick, text}) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        {text}
    </button>
  )
}
