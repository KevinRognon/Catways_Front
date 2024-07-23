
"use client";

import {useState} from "react";
import axios from "axios";


export default function Create() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-10">
                <h1>Création d'un catway</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-10">
                <CreateForm />
            </div>
        </>
    )
}

function CreateForm () {
    const [catwayNumber, setCatwayNumber] = useState('');
    const [catwayType, setCatwayType] = useState('');
    const [catwayState, setCatwayState] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function setFieldsToDefault() {
        setCatwayNumber('');
        setCatwayType('');
        setCatwayState('');
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.URL}/catways/create`, {
                catwayNumber: catwayNumber,
                catwayType: catwayType,
                catwayState: catwayState,
            })

            if(response.status === 200) {
                setErrorMessage('');
                setSuccessMessage(response.data.message);
            } else if (response.status === 501) {
                setSuccessMessage('');
                setErrorMessage(response.data.message);
            }

        } catch (e) {
            setSuccessMessage('');
            setErrorMessage(`Erreur du serveur: ${e}`);
        }
    }

    return (
        <>
            {
                errorMessage && <p className="text-red-500 font-bold" >{errorMessage}</p> ||
                successMessage && <p className="text-green-500">{successMessage}</p>
            }
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                <input value={catwayNumber} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayNumber" id="catwayNumber" placeholder="Numéro du catway" onChange={(e) => {setCatwayNumber(e.target.value)}} />
                <input value={catwayType} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayType" id="catwayType" placeholder="Taille du catway : short ou long" onChange={(e) => {setCatwayType(e.target.value)}} />
                <input value={catwayState} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayState" id="catwayState" placeholder="Etat du catway" onChange={(e) => {setCatwayState(e.target.value)}} />
                <input className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50" type="submit" value="Créer"/>
            </form>
        </>
    )

}