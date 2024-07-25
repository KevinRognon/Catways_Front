"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import withAuth from "../../../../../components/withAuth"
import { useParams } from "next/navigation";


function ReservationCatway() {

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [catway, setCatway] = useState([]);
    const {id} = useParams(); 

    useEffect(() => {
        getCatwayInformation();
    }, []);


    const getCatwayInformation = async () => {
        const response = await axios.get(`${process.env.URL}/catways/${id}`);
        setCatway(await response.data);
        console.log(catway);
        
        
    }


    const handleSubmit = async () => {
        const response = await axios.post(`${process.env.URL}/reservations/create`, {
            catwayNumber: catway.catwayNumber,
            clientName: "",
            boatName: "",
            checkIn: "",
            checkOut: ""
        });
    }


    // return (
    //     <div className="flex flex-col items-center justify-center w-full mt-10">
    //         {errorMessage && <p className="text-red-500 font-bold">{errorMessage}</p>}
    //         {successMessage && <p className="text-green-500">{successMessage}</p>}
    //         <h2>Créer une nouvelle réservation</h2>
    //         <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-2 text-black">
    //             <input
    //                 value={catwayNumber}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="text"
    //                 name="catwayNumber"
    //                 id="catwayNumber"
    //                 placeholder="Numéro du catway"
    //                 onChange={(e) => setCatwayNumber(e.target.value)}
    //             />
    //             <input
    //                 value={catwayType}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="text"
    //                 name="catwayType"
    //                 id="catwayType"
    //                 placeholder="Taille du catway : short ou long"
    //                 onChange={(e) => setCatwayType(e.target.value)}
    //             />
    //             <input
    //                 value={catwayState}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="text"
    //                 name="catwayState"
    //                 id="catwayState"
    //                 placeholder="Etat du catway"
    //                 onChange={(e) => setCatwayState(e.target.value)}
    //             />
    //             <input
    //                 value={clientName}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="text"
    //                 name="clientName"
    //                 id="clientName"
    //                 placeholder="Nom du client"
    //                 onChange={(e) => setClientName(e.target.value)}
    //             />
    //             <input
    //                 value={boatName}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="text"
    //                 name="boatName"
    //                 id="boatName"
    //                 placeholder="Nom du bateau"
    //                 onChange={(e) => setBoatName(e.target.value)}
    //             />
    //             <input
    //                 value={reservationDate}
    //                 className="border-cyan-700 border-2 p-2 outline-lime-800"
    //                 type="date"
    //                 name="reservationDate"
    //                 id="reservationDate"
    //                 onChange={(e) => setReservationDate(e.target.value)}
    //             />
    //             <input
    //                 className="p-2 border-2 border-cyan-700 bg-cyan-700 text-cyan-100 hover:cursor-pointer hover:text-lime-50"
    //                 type="submit"
    //                 value="Créer"
    //             />
    //         </form>
    //     </div>
    // )
}


export default withAuth(ReservationCatway);