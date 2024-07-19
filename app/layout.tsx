import '../public/global.css';
import { UserProvider } from '../context/userContext';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body>
                <main>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </main>
            </body>
        </html>
    )
}