"use client";

import {useState} from "react";
import axios from "axios";


export default function Create() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mt-10">
                <h1>User creation form</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-10">
                <CreateForm />
            </div>
        </>
    )
}

function CreateForm () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function setFieldsToDefault() {
        setName('');
        setEmail('');
        setPassword('');
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://catways-api.onrender.com/users/add', {
                name: name,
                email: email,
                password: password,
            })
            setSuccessMessage('Utilisateur enregistré.');
            setFieldsToDefault();

        } catch (e) {
            setErrorMessage(`Erreur lors de l'enregistrement: ${e}`);
        }
    }

    return (
        <>
            {
                errorMessage && <p className="text-red-500 font-bold" >{errorMessage}</p> ||
                successMessage && <p className="text-green-500">{successMessage}</p>
            }
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                <input value={name} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="name" id="name" placeholder="Name" onChange={(e) => {setName(e.target.value)}} />
                <input value={email} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="email" id="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                <input value={password} className="border-cyan-700 border-2 p-2 outline-lime-800" type="password" name="password" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                <input className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50" type="submit" value="Créer"/>
            </form>
        </>
    )

}