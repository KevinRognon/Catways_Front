import { useState } from "react";
import BlueButton from "../buttons/BlueButton";


export default function ModalUploadFile({title, text, onClick}) {

    const [file, setFile] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(file);

    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <>

            <div onClick={onClick} className='absolute top-0 left-0 z-10 w-dvw h-dvh bg-black bg-opacity-70 flex justify-center items-center'>
                <div onClick={stopPropagation} id="modalFile" className='flex items-center justify-center text-black bg-neutral-300 w-fit h-fit p-2 rounded-md'>
                    <form onSubmit={handleSubmit} >
                        <div className="flex flex-col ">
                            <input onChange={(e) => {setFile(e.target.value)}} type="file" name="file" />
                            <BlueButton onClick={onsubmit} text="Uploader" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}