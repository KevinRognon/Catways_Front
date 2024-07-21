"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function withAuth(WrappedComponent) {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = Cookies.get('token');

            if (!token) {
                router.replace('/');
            } else {
                axios.defaults.headers.common['Authorization'] = `${token}`;
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};
