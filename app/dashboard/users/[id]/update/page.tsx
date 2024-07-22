"use client";

import withAuth from "../../../../../components/withAuth";
import {useState} from "react";
import axios from "axios";
import {useParams} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


function UpdateUser () {
    const {id} = useParams();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        // @ts-ignore
        const response = await axios.patch(`${process.env.URL}/users/${id}/update`, {
            name: name,
            email: email,
            password: password
        });

        const data = await response.data;
        if(response.status === 501) {
            setErrorMessage(data.message);
            setFieldsToDefault();
        } else {
            setSuccessMessage(data.message);
            setFieldsToDefault();
        }
    }


    function setFieldsToDefault() {
        setName('');
        setEmail('');
        setPassword('');
    }




    return (
        <>
            <div  className="flex flex-col items-center justify-center w-full mt-10">
                {
                    errorMessage && <p className="text-red-500 font-bold" >{errorMessage}</p> ||
                    successMessage && <p className="text-green-500">{successMessage}</p>
                }
                <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                    <input value={name} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="name" id="name" placeholder="Name" onChange={(e) => {setName(e.target.value)}} />
                    <input value={email} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="email" id="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                    <input value={password} className="border-cyan-700 border-2 p-2 outline-lime-800" type="password" name="password" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                    <input className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50" type="submit" value="Modifier"/>
                </form>
            </div>
        </>
    )

}

export default withAuth(UpdateUser);