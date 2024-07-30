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
                <main className="bg-cyan-950 h-dvh text-cyan-100">
                    <UserProvider>
                        {children}
                    </UserProvider>
                </main>
            </body>
        </html>
    )
}