"use client";

import Cookies from 'js-cookie';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useUser} from "../../context/userContext";
import {Suspense, useState} from "react";
import BlueButton from '../../components/ui/buttons/BlueButton';
import DeleteButton from '../../components/ui/buttons/DeleteButton';
import ModalConfirmation from '../../components/ui/modal/ModalConfirmation';

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const {user, setUser} = useUser();
    const [showModal, setShowModal] = useState(false);


    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        setUser(null);
        router.replace('/');
    };

    const askConfirmation = () => {
        setShowModal(true);
    }

    const abortFunction = () => {
        setShowModal(false);
    }

    const navigateToAccount = () => {
        router.push('/dashboard/account')
    }

    return (
        <>
            <nav className="flex items-center justify-between gap-2 bg-cyan-700 text-cyan-100 h-12 pl-5 pr-5">
                {
                    user ?
                        <Link href="/dashboard">
                            <div>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                        </Link>
                        :
                        <div>
                            <p>Loading</p>
                            <p>Loading</p>
                        </div>

                }
                <div className="flex gap-2 font-semibold">
                    <BlueButton onClick={navigateToAccount} text="Compte" />
                    <DeleteButton onClick={askConfirmation} text="Déconnexion" />
                </div>
            </nav>
            {
                showModal 
                    &&
                <ModalConfirmation title="Êtes-vous sûr ?" option1="Annuler" option2="Déconnexion" onAbort={abortFunction} onConfirm={handleLogout} />
            }
            {children}
        </>
    )
}