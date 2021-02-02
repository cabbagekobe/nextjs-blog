import Link from "next/link";

import { Site } from "@/site";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">
          <a aria-label={Site.title}>
            {Site.title}
          </a>
        </Link>
      </h1>
    </header>
  );
}
