import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-5 text-center">
      <h1 className="text-2xl">
        <Link href="/">
          <a aria-label="Tailwind CSS Blog">
            cabbagekobe.info
          </a>
        </Link>
      </h1>
    </header>
  )
}
