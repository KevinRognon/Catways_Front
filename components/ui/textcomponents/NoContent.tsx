import React from 'react'

export default function NoContent({title, text}) {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{text}</p>
    </div>
  )
}
