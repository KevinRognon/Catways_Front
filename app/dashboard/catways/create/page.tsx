"use client";

import { useState } from "react";
import axios from "axios";
import BackButton from "../../../../components/ui/buttons/BackButton";

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

function CreateForm() {
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

    function displayErrorMessage(message) {
        setSuccessMessage('');
        setErrorMessage(message);
    }

    function displaySuccessMessage(message) {
        setErrorMessage('');
        setSuccessMessage(message);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        
        try {
            const response = await axios.post(`${process.env.URL}/catways/create`, {
                catwayNumber: catwayNumber,
                catwayType: catwayType.toLowerCase(),
                catwayState: catwayState,
            });

            if (response.status === 200 && response.data.message) {
                displaySuccessMessage(response.data.message);
                setFieldsToDefault();
            } else if (response.status === 400 && response.data.message) {
                displayErrorMessage(response.data.message);
            } else {
                displayErrorMessage("Une erreur est survenue.");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                displayErrorMessage(error.response.data.message);
            } else {
                displayErrorMessage(`Erreur du serveur: ${error.message}`);
            }
        }

        setTimeout(() => {
            setSuccessMessage('');
            setErrorMessage('');
        }, 5000); // Augmenter le délai à 5 secondes pour plus de visibilité
    }

    return (
        <>
            {errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                <input value={catwayNumber} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayNumber" id="catwayNumber" placeholder="Numéro du catway" onChange={(e) => { setCatwayNumber(e.target.value) }} />
                <input value={catwayType} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayType" id="catwayType" placeholder="Taille du catway : short ou long" onChange={(e) => { setCatwayType(e.target.value) }} />
                <input value={catwayState} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="catwayState" id="catwayState" placeholder="Etat du catway" onChange={(e) => { setCatwayState(e.target.value) }} />
                <input className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50" type="submit" value="Créer" />
                <BackButton />
            </form>
        </>
    )
}
