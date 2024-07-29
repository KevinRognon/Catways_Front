import { useRouter } from 'next/navigation'
import React from 'react'

export default function BackButton() {

    const router = useRouter();

    const navigateBack = () => {
        router.back();
    }

  return (
    <button onClick={navigateBack} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">Retour</button>
  )
}
