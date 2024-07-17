import Link from "next/link";
import './global.css';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body>
            <header className="bg-lime-500 text-lime-700 h-20 flex items-center justify-center">
                <nav className="flex items-center justify-center gap-2">
                    <h1 className="underline p-3 hover:bg-lime-200 rounded-full">
                        <Link href="/">Russell</Link>
                    </h1>
                    <ul>
                        <li className="underline p-3 hover:bg-lime-200 rounded-full">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </body>
        </html>
    )
}