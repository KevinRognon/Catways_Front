"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import withAuth from "../../../../components/withAuth";


function DetailCatway() {

    const [catway, setCatway] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const {id} = useParams();
    const router = useRouter();

    const fetchdata = async () => {
        const response = await axios.get(`${process.env.URL}/catways/${id}`)
        setCatway(await response.data.catway);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    async function handleDelete() {
        const response = await axios.delete(`${process.env.URL}/catways/${id}`);
        if(response.status === 200) {
            router.replace('/dashboard/catways')
        } else if (response.status === 501) {
            setErrorMessage("Une erreur est survenue.")
        }
    }

    return (
        <>
            <div  className="p-10">
                <article className="w-2/5 bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
                    <h2 className="text-2xl font-semibold text-cyan-700 mb-4">Catway Detail</h2>
                    <p className="mb-2">
                        {/* @ts-ignore */}
                        <strong>Numéro catway: </strong> {catway.catwayNumber}
                    </p>
                    <p className="mb-4">
                        {/* @ts-ignore */}
                        <strong>Etat catway: </strong> {catway.catwayState}
                    </p>
                    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                        Supprimer
                    </button>
                    {
                        errorMessage && <p className="text-red-600 text-2xl">{errorMessage}</p>
                    }
                </article>
            </div>
        </>
    )

}

export default withAuth(DetailCatway);