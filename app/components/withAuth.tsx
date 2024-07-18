// components/withAuth.tsx
"use client";
import { verifyToken } from '../utils/verifyToken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

const withAuth = (WrappedComponent: ComponentType) => {
    const AuthenticatedComponent = (props: any) => {
        const router = useRouter();

        useEffect(() => {
            const tokenToVerify = Cookies.get('token');

            if (!tokenToVerify) {
                router.replace('/');
            } else {
                try {
                    verifyToken(tokenToVerify);
                } catch (error) {
                    router.replace('/');
                }
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;
