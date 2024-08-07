"use client";

import { useParams, useRouter } from "next/navigation";
import withAuth from "../../../../components/withAuth"
import axios from "axios";
import { useEffect, useState } from "react";
import BlueButton from "../../../../components/ui/buttons/BlueButton";
import ModalConfirmation from "../../../../components/ui/modal/ModalConfirmation";
import DeleteButton from "../../../../components/ui/buttons/DeleteButton";



function Detailed_Reservation() {

    const [reservation, setReservation] = useState({
        _id: "",
        clientName: "",
        boatName: "",
        checkIn: "",
        checkOut: "",
        createdAt: ""
    });
    const [showModal, setShowModal] = useState(false);

    const {id} = useParams();
    const router = useRouter();

    const getReservation = async () => {
        try {
            const response = await axios.get(`${process.env.URL}/reservations/${id}`);
            setReservation(prev => response.data.reservation);
            
        } catch (error) {
            console.error("Error fetching reservation data:", error);
        }
    };

    const formattedCreationDate = () => {
        const dateCreation = reservation.createdAt;

    }

    useEffect(() => {
        getReservation();
    }, [id]);

    const navigateBack = () => {
        router.back();
    }


    const handleDelete = async () => {
        await axios.delete(`${process.env.URL}/reservations/${id}`)
        navigateBack();
    }

    const askConfirmation = () => {
        setShowModal(true);
    }

    const abortFunction = () => {
        setShowModal(false);
    }

    const confirmFunction = () => {
        handleDelete();
    }



    return (
        <>
            <div className="container mx-auto mt-10">
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6 relative">
                        {/* <p className="text-gray-600 absolute top-1 right-1"></p> */}
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-3">Réservation crée le: {new Date(reservation.createdAt).toLocaleString()}</h2>
                        <p className="text-gray-600 mb-2"><strong>Client :</strong> {reservation.clientName}</p>
                        <p className="text-gray-600 mb-2"><strong>Bateau :</strong> {reservation.boatName}</p>
                        <p className="text-gray-600 mb-2"><strong>Heure d'arrivée :</strong> {new Date(reservation.checkIn).toLocaleString()}</p>
                        <p className="text-gray-600 mb-2"><strong>Heure de départ :</strong> {new Date(reservation.checkOut).toLocaleString()}</p>
                        <div className="flex gap-2 mt-4">
                            <DeleteButton onClick={askConfirmation} text="Valider départ" />
                            <BlueButton onClick={navigateBack} text="Retour" />
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal && <ModalConfirmation text="" title="Valider le départ ?" option1="Annuler" option2="Confirmer" onAbort={abortFunction} onConfirm={confirmFunction} />
            }
        </>
    )

}

export default withAuth(Detailed_Reservation);