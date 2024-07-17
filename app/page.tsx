import Link from "next/link";

export default function Page() {
    return (
        <>
            <h1>Hello, Next.js!</h1>
            <p>To navigate to the dashboard, click <Link href="/dashboard">here</Link></p>
        </>
    )
}