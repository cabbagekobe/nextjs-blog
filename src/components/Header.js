import Link from "next/link";

export default function Header() {
  return (
    <header className="container flex justify-between items-center py-10 max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div>
        <Link href="/">
          <a aria-label="Tailwind CSS Blog">
            cabbagekobe.info
          </a>
        </Link>
      </div>

      <div className="text-base leading-5">
        <Link href="/pages/issue">
          <a className="font-medium text-gray-500 hover:text-gray-700" aria-label="Tailwind CSS Blog">
            Documentation &rarr;
          </a>
        </Link>
      </div>
    </header>
  );
}
