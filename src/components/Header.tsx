import Link from "next/link";

import BLOG from "../../blog.config";

export default function Header() {
  return (
    <header className="container prose prose-sm max-w-3xl py-4 mx-auto  flex justify-between items-center">
      <h1 className="">
        <Link href="/">
          <a className="">{BLOG.title}</a>
        </Link>
      </h1>

      <div className="text-base leading-5">
        <Link href="/pages/issue">
          <a className="font-medium text-gray-500 hover:text-gray-700">
            Documentation &rarr;
          </a>
        </Link>
      </div>
    </header>
  );
}
