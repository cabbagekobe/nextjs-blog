import Link from 'next/link'

export default function BlogTitle({ blogTitle, href }) {
  return (
    <h3>
      <Link href={href}>
        <a>{blogTitle}</a>
      </Link>
    </h3>
  )
}
