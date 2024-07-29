import Link from 'next/link'
import React from 'react'

export default function DashboardItem({href, text}) {
  return (
    <Link href={href}>
        <article className="article_dashboard">
            <h2 className="text-5xl">{text}</h2>
        </article>
    </Link>
  )
}
