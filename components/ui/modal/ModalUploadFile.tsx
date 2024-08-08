import { useState } from "react";
import BlueButton from "../buttons/BlueButton";
import axios from "axios";
import { useUser } from "../../../context/userContext";


export default function ModalUploadFile({title, text, onClick}) {

    const {user} = useUser();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', file);
        formData.append('userId', user.id);

        
        try {
            const response = await axios.post(`${process.env.URL}/files`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

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
                            <input onChange={(e) => {setFile(e.target.files[0])}} type="file" name="file" />
                            <BlueButton onClick={onsubmit} text="Uploader" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}