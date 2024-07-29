import React from 'react'

export default function ReservationInfos({catwayNumber, clientName, boatName, formattedCheckinDate, formattedCheckoutDate}) {
  return (
    <>
        <div className="client_infos">
            <p className="mb-2">
                {/* @ts-ignore */}
                <strong>Numéro Catway: </strong> {catwayNumber}
            </p>
            <p className="mb-2">
                {/* @ts-ignore */}
                <strong>Client: </strong> {clientName}
            </p>
            <p className="mb-2">
                {/* @ts-ignore */}
                <strong>Bateau: </strong> {boatName}
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
    </>
  )
}
