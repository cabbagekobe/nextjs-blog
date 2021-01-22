import BLOG from "../../blog.config";

export default function Footer() {
  return (
    <footer className="container prose prose-sm py-4 mt-auto mx-auto text-center">
      <p className="">
        <a href="https://twitter.com/{BLOG.twitter}">
          &copy;{BLOG.title}
        </a>
      </p>
    </footer>
  );
}
