"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import withAuth from "../../../../../components/withAuth";
import { useParams } from "next/navigation";
import BackButton from "../../../../../components/ui/buttons/BackButton";

function ReservationCatway() {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [catway, setCatway] = useState(null);  // Changed to null
    const [catwayNumber, setCatwayNumber] = useState("");
    const [clientName, setClientName] = useState('');
    const [boatName, setBoatName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const {id} = useParams(); 

    useEffect(() => {
        getCatwayInformation();
    }, []);

    useEffect(() => {
        if (catway) {
            setCatwayNumber(catway.catwayNumber);
        }
    }, [catway]);

    const getCatwayInformation = async () => {
        const response = await axios.get(`${process.env.URL}/catways/${id}`);
        setCatway(response.data.catway);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            const response = await axios.post(`${process.env.URL}/reservations/create`, {
                catwayNumber: catwayNumber,
                clientName: clientName,
                boatName: boatName,
                checkIn: checkIn,
                checkOut: checkOut
            });

            if (response.status === 201) {
                setSuccessMessage(response.data.message);
                setErrorMessage('');
                setClientName('');
                setBoatName('');
                setCheckIn('');
                setCheckOut('');

            } else if (response.status === 400) {
                setErrorMessage(response.data.message);
            }

            setTimeout(() => {
                setSuccessMessage('');
                setErrorMessage('');
            }, 2000)
    }

    if (!catway) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full mt-10">
            {errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            <h2>Créer une nouvelle réservation</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
                <input
                    value={clientName}
                    className="border-cyan-700 border-2 p-2 outline-lime-800"
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Nom du client"
                    onChange={(e) => setClientName(e.target.value)}
                />
                <input
                    value={boatName}
                    className="border-cyan-700 border-2 p-2 outline-lime-800"
                    type="text"
                    name="boatName"
                    id="boatName"
                    placeholder="Nom du bateau"
                    onChange={(e) => setBoatName(e.target.value)}
                />
                <input
                    value={checkIn}
                    className="border-cyan-700 border-2 p-2 outline-lime-800"
                    type="datetime-local"
                    name="checkIn"
                    id="checkIn"
                    onChange={(e) => setCheckIn(e.target.value)}
                />
                <input
                    value={checkOut}
                    className="border-cyan-700 border-2 p-2 outline-lime-800"
                    type="datetime-local"
                    name="checkOut"
                    id="checkOut"
                    onChange={(e) => setCheckOut(e.target.value)}
                />
                <input
                    className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50"
                    type="submit"
                    value="Créer"
                />
                <BackButton />
            </form>
        </div>
    )
}

export default withAuth(ReservationCatway);
