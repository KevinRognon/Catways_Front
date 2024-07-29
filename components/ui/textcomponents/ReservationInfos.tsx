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
    </>
  )
}
