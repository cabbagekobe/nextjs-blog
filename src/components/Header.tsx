import React from 'react'
import Link from 'next/link'

import { Site } from "../site.config.js";

const Header = (): JSX.Element => (
  <header>
    <Link href="/">
      <a>{Site.title}</a>
    </Link>
  </header>
)

export default Header
