"use client";

import withAuth from '../../components/withAuth';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Votre contenu de dashboard */}
        </div>
    );
};

export default withAuth(Dashboard);
