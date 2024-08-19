"use client";
import React, { useEffect, useState } from 'react'
import BlueButton from '../buttons/BlueButton';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function ModalAccount({title, onAbort, title_patch, type, id}) {

    const [field, setField] = useState('');
    const [title_request, setTitleRequest] = useState('');
    const router = useRouter();

    useEffect(() => {
        setTitleRequest(title_patch);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(`${process.env.URL}/users/${id}/update`, {
                [title_request]: field
            })


            Cookies.remove('user');
            await Cookies.set('user', JSON.stringify(response.data.user), {
                expires: 0.5
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

  return (
    <div onClick={onAbort} className='absolute top-0 left-0 z-10 w-dvw h-dvh bg-black bg-opacity-70 flex justify-center items-center'>
        <div onClick={stopPropagation} className='flex flex-col items-center z-20 text-black bg-cyan-100 w-fit h-fit p-5 rounded-md'>

            <p className='text-lg font-bold'>Modification: {title}</p>


            <div className='flex gap-2 mt-4'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <input onChange={(e) => {setField(e.target.value)}} className='p-1 rounded-3xl shadow-lg pl-5' placeholder={title} type={type} />
                    <BlueButton onClick={handleSubmit} text="Modifier" />
                </form>
            </div>
        </div>
    </div>
  )
}
