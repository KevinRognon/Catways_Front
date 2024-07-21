"use client";

import withAuth from '../../components/withAuth';
import Users from "./users/page";
import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="">
            <h1 className="p-10 text-3xl text-cyan-700">Tableau de bord</h1>


            <section className="grid grid-cols-1 grid-rows-2 gap-5 md:grid-cols-3">
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
                <Link href="/dashboard/settings">
                    <article className="article_dashboard">
                        <h2 className="text-5xl">Paramètres</h2>
                    </article>
                </Link>
            </section>
        </div>
);
};

export default withAuth(Dashboard);
