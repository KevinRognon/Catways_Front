"use client";

import withAuth from "../../../../../components/withAuth";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter, useParams} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


function UpdateCatway () {
    const router = useRouter();
    const {id} = useParams();
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


    const [catwayState, setCatwayState] = useState('');
    const [catway, setCatway] = useState([]);

    useEffect(() => {
        getCatwayInfos();
    }, []);

    async function getCatwayInfos() {
        // @ts-ignore
        const response = await axios.get(`${process.env.URL}/catways/${id}`);
        setCatway(await response.data.catway);
    }


    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        // @ts-ignore
        const response = await axios.patch(`${process.env.URL}/catways/${id}/update`, {
            catwayState: catwayState
        });
        if(response.status === 501) {
            setErrorMessage(response.data.message);
            setFieldsToDefault();
        } else {
            setSuccessMessage(response.data.message);
            setTimeout(() => {
                router.replace(`/dashboard/catways/${id}`);
            }, 1000);
        }
    }


    function setFieldsToDefault() {
        setCatwayState('');
    }




    return (
        <>
            <div  className="flex flex-col items-center justify-center w-full mt-10">
                {
                    errorMessage && <p className="text-red-500 font-bold" >{errorMessage}</p> ||
                    successMessage && <p className="text-green-500">{successMessage}</p>
                }
                {/* @ts-ignore */}
                <h2>Modification du catway {catway.catwayNumber}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                    {/* @ts-ignore */}
                    <input value={catwayState} className="border-cyan-700 border-2 p-2 outline-lime-800" type="text" name="name" id="name" placeholder={catway.catwayState} onChange={(e) => {setCatwayState(e.target.value)}} />
                    <input className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50" type="submit" value="Modifier"/>
                    <button onClick={() => {
                        router.replace(`/dashboard/catways/${id}`);
                    }} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Retour
                    </button>
                </form>
            </div>
        </>
    )

}

export default withAuth(UpdateCatway);