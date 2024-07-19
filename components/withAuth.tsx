"use client"; // Assurez-vous que ce fichier est traité comme un composant client

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function withAuth(WrappedComponent) {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = Cookies.get('token');

            if (!token) {
                router.replace('/');
            }
        }, [router]);


        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};
