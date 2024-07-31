import React from 'react'

export default function RouteApi({route, method, desc}) {
  return (
    <li className='flex items-center justify-between bg-slate-100 text-gray-800'>
        <div className='border-r-2 p-4'>
            <p>Method</p>
            <p>{method}</p>
        </div>
        <div className='p-4'>
            <p>Description</p>
            <p>{desc}</p>
        </div>
        <div className='border-l-2 p-4'>
            <p>Route</p>
            <p>{route}</p>
        </div>
    </li>
  )
}
