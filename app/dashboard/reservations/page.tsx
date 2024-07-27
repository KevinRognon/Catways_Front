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
                    return <Reservation key={reservation._id} id_resa={reservation._id} clientName={reservation.clientName} boatName={reservation.boatName} catwayNumber={reservation.catwayNumber} checkin={reservation.checkIn} checkout={reservation.checkOut}/>
                })}
            </ul>
        </>
    )

}

function Reservation(props) {

    const checkinDate = new Date(props.checkin);
    const checkoutDate = new Date(props.checkout);

    const formattedCheckinDate = checkinDate.toLocaleString('fr-FR', {
        year: 'numeric',
        month : 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const formattedCheckoutDate = checkoutDate.toLocaleString('fr-FR', {
        year: 'numeric',
        month : 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <>
            <article className="bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
                <h2 className="text-2xl mb-4 underline">{props.clientName}</h2>
                <div className="bloc_infos relative">
                    <div className="client_infos">
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
                    </div>

                    <div className="schedule_infos absolute top-0 right-1 flex flex-col gap-7">
                        <p className="mb-2">
                            {/* @ts-ignore */}
                            <strong>Heure d'arrivée: </strong> {formattedCheckinDate}
                        </p>
                        <p className="mb-2">
                            {/* @ts-ignore */}
                            <strong>Heure de départ: </strong> {formattedCheckoutDate}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">Voir</button>
                </div>
            </article>
        </>
    )
}


export default withAuth(Reservations);
