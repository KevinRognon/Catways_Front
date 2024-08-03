import { useState } from "react";
import ModalAccount from "../modal/ModalAccount";



export default function AccountCard({title, option, icon, type, id, title_patch}) {

    const [showModal, setShowModal] = useState(false);

    const ShowModalTrue = () => {
        if (title_patch != "creation") {
            setShowModal(true);
        }
    }

    const ShowModalFalse = () => {
        setShowModal(false);
    }

    return (
        <>
            <li onClick={ShowModalTrue} className="flex flex-col bg-white w-60 h-fit p-5 rounded-2xl border-2 shadow-md hover:shadow-xl hover:transition-all hover:cursor-pointer duration-200">
                <div className="flex justify-between">
                    <p className="font-bold text-xl">{title}</p>
                    {icon}
                </div>
                <p className="text-gray-700">{option}</p>
            </li>
            {
                showModal
                    &&
                <ModalAccount title_patch={title_patch} id={id} type={type} onAbort={ShowModalFalse} title={title} />
                
            }
        </>
    )

}