import Link from "next/link";

import BLOG from "../../blog.config";

export default function Header() {
  return (
    <header className="">
      <h1 className="text-center text-teal-500 text-2xl py-4">
        <Link href="/">
          <a className="">{BLOG.title}</a>
        </Link>
      </h1>
    </header>
  );
}
