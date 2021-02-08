import Link from "next/link";

import { Blog } from "@/blog";

export default function Header() {
  return (
    <header className="container text-2xl flex justify-between items-center py-10 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <h1>
        <Link href="/">
          <a aria-label={Blog.title}>
            {Blog.title}
          </a>
        </Link>
      </h1>
    </header>
  );
}
