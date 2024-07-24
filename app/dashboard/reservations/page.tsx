"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import axios from "axios";


function Reservations() {

    const [reservations, setReservations] = useState([]);

    const fetchdata = async () => {

        const response = await axios.get(`${process.env.URL}/reservations`);
        setReservations(response.data.reservations);

    }


    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <>
            <ul className="grid grid-cols-2 gap-5 mt-5 pb-5 w-4/5 m-auto">
                {reservations.map(reservation => {
                    return <Reservation key={reservation._id} id_resa={reservation._id} clientName={reservation.clientName} boatName={reservation.boatName} catwayNumber={reservation.catwayNumber} />
                })}
            </ul>
        </>
    )

}

function Reservation(props) {



    return (
        <>
            <article className="bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
                <h2 className="text-2xl font-semibold text-cyan-700 mb-4">ID: {props.id_resa}</h2>
                <p className="mb-2">
                    {/* @ts-ignore */}
                    <strong>Numéro Catway: </strong> {props.catwayNumber}
                </p>
                <p className="mb-2">
                    {/* @ts-ignore */}
                    <strong>Client: </strong> {props.clientName}
                </p>
                <p className="mb-2">
                    {/* @ts-ignore */}
                    <strong>Bateau: </strong> {props.boatName}
                </p>
                <div className="flex items-center gap-2">
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Supprimer</button>
                </div>
            </article>
        </>
    )
}


export default withAuth(Reservations);
