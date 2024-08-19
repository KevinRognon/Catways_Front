import { useState } from "react";
import BlueButton from "../buttons/BlueButton";
import axios from "axios";
import { useUser } from "../../../context/userContext";


export default function ModalUploadFile({title, text, onClick, onSuccessUpload}) {

    const {user} = useUser();
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', user._id);

        
        try {
            const response = await axios.post(`${process.env.URL}/files`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if(response.status === 201) {
                let avatarPath = response.data.path;

                // Si le chemin ne commence pas par un slash, il est ajouté
                if (!avatarPath.startsWith("/")) {
                    avatarPath = `/${avatarPath}`;
                }

                // Remplace les backslash par des slash
                avatarPath = avatarPath.replace(/\\/g, '/');

                const update_avatar_url = await axios.patch(`${process.env.URL}/users/${user.id}/update`, {
                    avatar: `${process.env.URL}${avatarPath}` // URL correctement formée
                });
                
                console.log(avatarPath);
                
                onSuccessUpload();
            }
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
                    <form onSubmit={handleSubmit} className="p-5" >
                        <div className="flex flex-col gap-5">
                            <input onChange={(e) => {setFile(e.target.files[0])}} type="file" name="file" />
                            <BlueButton onClick={onsubmit} text="Uploader" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}