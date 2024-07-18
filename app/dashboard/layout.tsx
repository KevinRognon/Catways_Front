"use client";

import Cookies from 'js-cookie';
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove("token");
        router.replace('/');
    };
    return (
        <>
            <nav className="flex items-center justify-center gap-2 bg-lime-200 text-lime-700 h-12">
                <Link className="p-4 " href="/dashboard/profile">Profile</Link>
                <Link className="p-4 " href="/dashboard/users">Users</Link>
                <Link className="p-4 " href="/dashboard/settings">Settings</Link>
                <p className="hover:cursor-pointer" onClick={handleLogout}>Logout</p>
            </nav>

            <section>
                {children}
            </section>
        </>
    )
}