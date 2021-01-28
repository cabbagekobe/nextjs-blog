import React from 'react'
import Link from 'next/link'

import { Site } from "../site.config";

const Header = (): JSX.Element => (
  <header className="container text-2xl flex justify-between items-center py-10 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <h1>
      <Link href="/">
        <a>{Site.title}</a>
      </Link>
    </h1>

    <div className="text-base leading-5">
      <Link href="/pages/issue">
        <a className="text-gray-500 hover:text-gray-700" aria-label="Tailwind CSS Blog">
          Documentation &rarr;
        </a>
      </Link>
    </div>
  </header>
)

export default Header
