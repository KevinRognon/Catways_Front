import React from 'react'
import BlueButton from '../buttons/BlueButton'
import DeleteButton from '../buttons/DeleteButton'

export default function ModalConfirmation({onAbort, onConfirm, title, option1, option2}) {
  return (
    <div onClick={onAbort} className='absolute top-0 left-0 z-10 w-dvw h-dvh bg-black bg-opacity-70 flex justify-center items-center'>
        <div className='flex flex-col items-center z-20 text-black bg-neutral-300 w-fit h-fit p-5 rounded-md'>
            <p className='text-lg font-bold'>{title}</p>
            <div className='flex gap-2 mt-4'>
                <BlueButton onClick={onAbort} text={option1} />
                <DeleteButton onClick={onConfirm} text={option2} />
            </div>
        </div>
    </div>
  )
}
