import BlueButton from "../buttons/BlueButton";
import DeleteButton from "../buttons/DeleteButton";


export default function ModalUploadFile({title, text, pos_x, pos_y}) {


    return (
        <>
            <div id="modalFile" className='absolute flex flex-col items-center z-20 text-black bg-neutral-300 w-fit h-fit p-5 rounded-md'>
                <p className='text-lg font-bold'>{title}</p>
                <p>{text}</p>
            </div>
        </>
    )
}