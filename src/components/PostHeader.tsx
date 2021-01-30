import React from 'react'
import Link from 'next/link'

const PostHeader = ({title, date, link}): JSX.Element => (
  <header>
    <time>
      {date}
    </time>

    <h1>
      <Link href={link}>
        <a>
          {title}
        </a>
      </Link>
    </h1>
  </header>
)

export default PostHeader
