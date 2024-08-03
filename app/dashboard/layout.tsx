"use client";

import Cookies from 'js-cookie';
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "../../context/userContext";
import { useState, useEffect } from "react";
import BlueButton from '../../components/ui/buttons/BlueButton';
import DeleteButton from '../../components/ui/buttons/DeleteButton';
import ModalConfirmation from '../../components/ui/modal/ModalConfirmation';

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, setUser } = useUser();
    const [showModal, setShowModal] = useState(false);
    const [route, setRoute] = useState('');

    const handleLogout = async () => {
        await router.replace('/');
        Cookies.remove("token");
        Cookies.remove("user");
        setUser(null);
    };

    const askConfirmation = () => {
        setShowModal(true);
    };

    const abortFunction = () => {
        setShowModal(false);
    };

    const navigateToAccount = () => {
        router.push('/dashboard/account');
    };

    const navigateToDashboard = () => {
        router.push('/dashboard/');
    };

    const navigateToApi = () => {
        router.push('/dashboard/api');
    };

    const checkRoutePath = () => {
        let newpathname = pathname.split('/');
        let newpathname2 = '';
        if (/\d/.test(newpathname[newpathname.length - 1])) {
            newpathname2 = newpathname[newpathname.length - 2]
        } else {
            newpathname2 = newpathname[newpathname.length - 1];
        }
        
        setRoute(newpathname2);
    }

    useEffect(() => {
        checkRoutePath();
    }, [pathname]);

    return (
        <>
            <nav className="flex items-center justify-between gap-2 text-cyan-50 font-semibold h-12 p-8 border-b-4">
                {user ? (
                    <BlueButton onClick={navigateToAccount} text={user.name} />
                ) : (
                    <div></div>
                )}
                <div className="text-xl">
                    <p>{route.toUpperCase()}</p>
                </div>
                <div className="flex gap-2">
                    <BlueButton onClick={navigateToDashboard} text="Dashboard" />
                    <BlueButton onClick={navigateToApi} text="Api" />
                    <DeleteButton onClick={askConfirmation} text="Déconnexion" />
                </div>
            </nav>
            {showModal && (
                <ModalConfirmation
                    title="Êtes-vous sûr ?"
                    option1="Annuler"
                    option2="Déconnexion"
                    onAbort={abortFunction}
                    onConfirm={handleLogout}
                />
            )}
            
            <main className="pt-8 pb-8">
                {children}
            </main>
        </>
    );
}
