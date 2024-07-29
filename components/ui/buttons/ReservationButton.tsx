import React from 'react'

export default function ReservationButton({onClick, text}) {
  return (
    <button onClick={onClick} className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-600">
        {text}
    </button>
  )
}
