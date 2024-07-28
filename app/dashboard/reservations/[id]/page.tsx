"use client";

import { useParams } from "next/navigation";
import withAuth from "../../../../components/withAuth"
import axios from "axios";
import { useEffect, useState } from "react";


function Detailed_Reservation() {

    const [reservation, setReservation] = useState({
        _id: "",
        clientName: "",
        boatName: "",
        checkIn: "",
        checkOut: "",
    });
    const {id} = useParams();

    const getReservation = async () => {
        try {
            const response = await axios.get(`${process.env.URL}/reservations/${id}`);
            setReservation(prev => response.data.reservation);
            
        } catch (error) {
            console.error("Error fetching reservation data:", error);
        }
    };

    useEffect(() => {
        getReservation();
    }, [id]);


    return (
        <div className="container mx-auto mt-10">
            <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Détails de la Réservation</h2>
                    <p className="text-gray-600 mb-2"><strong>Client :</strong> {reservation.clientName}</p>
                    <p className="text-gray-600 mb-2"><strong>Bateau :</strong> {reservation.boatName}</p>
                    <p className="text-gray-600 mb-2"><strong>Heure d'arrivée :</strong> {new Date(reservation.checkIn).toLocaleString()}</p>
                    <p className="text-gray-600 mb-2"><strong>Heure de départ :</strong> {new Date(reservation.checkOut).toLocaleString()}</p>
                    <div className="flex justify-end mt-4">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default withAuth(Detailed_Reservation);