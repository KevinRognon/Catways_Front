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
            <nav className="flex items-center justify-between gap-2 bg-lime-200 text-lime-700 h-12 pl-5 pr-5">
                {
                    user
                    &&
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                }
                <div>
                    <Link className="p-4 " href="/dashboard/profile">Profile</Link>
                    <Link className="p-4 " href="/dashboard/users">Users</Link>
                    <Link className="p-4 " href="/dashboard/settings">Settings</Link>
                </div>
                <p className="hover:cursor-pointer" onClick={handleLogout}>Logout</p>
            </nav>

            <section>
                {children}
            </section>
        </>
    )
}