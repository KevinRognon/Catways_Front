"use client";

import withAuth from "../../components/withAuth";
import {useEffect, useState} from "react";
import Link from "next/link";
import {items} from "../../constants/dashboard_items";
import DashboardItem from "../../components/ui/textcomponents/DashboardItem";
import NoContent from "../../components/ui/textcomponents/NoContent";

const Page = () => {
    return (
        <>
            <Dashboard />
        </>
    );
};

function Dashboard() {
    
    const [dashboardItems, setDashboardItems] = useState([]);

    useEffect(() => {
        setDashboardItems(prev => items)
    }, [items]);

    return (
        <>
            <h1 className="p-10 text-3xl text-cyan-700">Tableau de bord</h1>


            <section className="grid grid-cols-3 p-16 gap-3">
                {
                    dashboardItems
                    ? dashboardItems.map((item) => {return <DashboardItem key={item.id} href={item.url} text={item.title} />})
                    : <NoContent title="Aucun item à afficher" text="Contactez un administrateur si le problème persiste" />
                }
            </section>
        </>
    )
}

export default withAuth(Page);
