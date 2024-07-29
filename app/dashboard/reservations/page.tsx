"use client";

import withAuth from "../../../components/withAuth";
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from 'next/navigation';
import ShowButton from "../../../components/ui/buttons/ShowButton";
import ReservationInfos from "../../../components/ui/textcomponents/ReservationInfos";


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
    const id = props.id_resa;
    const router = useRouter();

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

    const navigateToReservation = () => {
        router.push(`/dashboard/reservations/${id}`)
    }

    return (
        <>
            <article className="bg-cyan-50 p-6 rounded-lg shadow-md text-cyan-950">
                <h2 className="text-2xl mb-4 underline">{props.clientName}</h2>
                <div className="bloc_infos relative">

                    <ReservationInfos
                        catwayNumber={props.catwayNumber}
                        boatName={props.boatName}
                        clientName={props.clientName}
                        formattedCheckinDate={formattedCheckinDate}
                        formattedCheckoutDate={formattedCheckoutDate}
                    />

                </div>
                <div className="flex items-center gap-2">

                    <ShowButton onClick={ navigateToReservation } text="Voir" />

                </div>
            </article>
        </>
    )
}


export default withAuth(Reservations);
