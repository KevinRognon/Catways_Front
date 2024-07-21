"use client";

import Cookies from 'js-cookie';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useUser} from "../../context/userContext";

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const {user, setUser} = useUser();


    const handleLogout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        setUser(null);
        router.replace('/');
    };
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
                <p className="hover:cursor-pointer" onClick={handleLogout}>Déconnexion</p>
            </nav>
            {children}
        </>
    )
}