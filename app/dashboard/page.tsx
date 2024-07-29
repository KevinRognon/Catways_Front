"use client";

import withAuth from "../../components/withAuth";
import Loader from "../../components/Loader";
import {Suspense, useEffect} from "react";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <Dashboard />
        </>
    );
};

function Dashboard() {

    useEffect(() => {
    }, []);

    return (
        <>
            <h1 className="p-10 text-3xl text-cyan-700">Tableau de bord</h1>


            <section className="grid grid-cols-3 p-16 gap-3 w-full">
                <Link href="/dashboard/users">
                    <article className="article_dashboard">
                        <h2 className="text-5xl">Liste utilisateurs</h2>
                    </article>
                </Link>
                <Link href="/dashboard/catways">
                    <article className="article_dashboard">
                        <h2 className="text-5xl">Catways</h2>
                    </article>
                </Link>
                <Link href="/dashboard/reservations">
                    <article className="article_dashboard">
                        <h2 className="text-5xl">Réservations</h2>
                    </article>
                </Link>
            </section>
        </>
    )
}

export default withAuth(Page);
