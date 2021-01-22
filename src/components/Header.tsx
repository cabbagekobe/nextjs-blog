import Link from "next/link";

import BLOG from "../../blog.config";

export default function Header() {
  return (
    <header className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <h1 className="text-teal-500 text-2xl py-4">
        <Link href="/">
          <a className="">{BLOG.title}</a>
        </Link>
      </h1>
    </header>
  );
}
