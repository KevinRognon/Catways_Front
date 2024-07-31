import '../public/global.css';
import { UserProvider } from '../context/userContext';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body className='bg-cyan-950 text-cyan-100'>
                <UserProvider>
                    {children}
                </UserProvider>
            </body>
        </html>
    )
}