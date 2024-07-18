"use client";

import Cookies from 'js-cookie';
import Link from "next/link";

export default function Layout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const handleLogout = () => {
        console.log("logout");
        Cookies.remove("token");
    };
    return (
        <>
            <nav className="flex items-center justify-center gap-2 bg-lime-200 text-lime-700 h-10">
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