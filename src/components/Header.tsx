import Link from "next/link";

import BLOG from "../../blog.config";

export default function Header() {
  return (
    <header className="container prose prose-sm max-w-3xl py-4  mx-auto">
      <h1 className="">
        <Link href="/">
          <a className="">{BLOG.title}</a>
        </Link>
      </h1>
    </header>
  );
}
