import BLOG from "../../blog.config";

export default function Footer() {
  return (
    <footer className="text-center text-teal-500 text-xl py-4">
      <p className="m-footer-copy">
        <a href="https://twitter.com/{BLOG.twitter}">
          &copy;{BLOG.title}
        </a>
      </p>
    </footer>
  );
}
