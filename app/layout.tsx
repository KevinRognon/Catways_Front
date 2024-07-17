import Link from "next/link";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
        <body>
            <header>
                <nav>
                    <h1>
                        <Link href="/">Russell</Link>
                    </h1>
                    <ul>
                        <li>
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