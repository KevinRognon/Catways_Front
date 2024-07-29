"use client";

import {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useRouter} from "next/navigation";
import withAuth from "../../../../components/withAuth";
import ReservationButton from "../../../../components/ui/buttons/ReservationButton";
import DeleteButton from "../../../../components/ui/buttons/DeleteButton";
import BlueButton from "../../../../components/ui/buttons/BlueButton";
import ModalConfirmation from "../../../../components/ui/modal/ModalConfirmation";


function DetailCatway() {

    const [catway, setCatway] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isShownModal, setIsShownModal] = useState(false);
    const {id} = useParams();
    const router = useRouter();

    const fetchdata = async () => {
        const response = await axios.get(`${process.env.URL}/catways/${id}`)
        setCatway(await response.data.catway);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const setShowModal = (value: boolean) => {
        setIsShownModal(value);
    }

    const closeModal = () => {
        setIsShownModal(false);
    }

    async function checkConfirm() {
        setShowModal(true);
    }

    async function handleDelete() {
        const response = await axios.delete(`${process.env.URL}/catways/${id}`);
        if(response.status === 200) {
            router.replace('/dashboard/catways')
        } else if (response.status === 501) {
            setErrorMessage("Une erreur est survenue.")
        }
    }

    const navigateToReservationForm = () => {
        router.push(`/dashboard/catways/${id}/reservation`);
    }
    const navigateToUpdateForm = () => {
        router.push(`/dashboard/catways/${id}/update`);
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
                    <p className="mb-2">
                        {/* @ts-ignore */}
                        <strong>Etat catway: </strong> {catway.catwayState}
                    </p>
                    <p className="mb-2">
                        {/* @ts-ignore */}
                        <strong>Longueur du catway: </strong> {catway.catwayType}
                    </p>
                    <div className="flex items-center gap-2">
                        <ReservationButton onClick={navigateToReservationForm} text="Réserver" />
                        <BlueButton onClick={navigateToUpdateForm} text="Modifier" />
                        <DeleteButton onClick={checkConfirm} text="Supprimer" />
                    </div>
                    {
                        errorMessage && <p className="text-red-600 text-2xl">{errorMessage}</p>
                    }
                    
                </article>
                {
                    isShownModal 
                        && 
                    <ModalConfirmation option1="Annuler" option2="Supprimer" title="Êtes-vous sûr ?" onAbort={closeModal} onConfirm={handleDelete} />
                }
            </div>
        </>
    )

}

export default withAuth(DetailCatway);