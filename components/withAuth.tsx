"use client";

import { useEffect } from "react";
import {usePathname, useRouter} from "next/navigation";
import Cookies from 'js-cookie';
import axios from 'axios';

export default function withAuth(WrappedComponent) {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();
        const pathName = usePathname();

        useEffect(() => {
            const token = Cookies.get('token');
            const user = Cookies.get('user');

            if (!token || !user) {
                router.replace('/');
            } else {
                axios.defaults.headers.common['Authorization'] = `${token}`;
                if (pathName === "/") {
                    router.replace('/dashboard');
                }
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};
