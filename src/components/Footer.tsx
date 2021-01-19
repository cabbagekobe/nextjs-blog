import BLOG from "../../blog.config";

export default function Footer() {
  return (
    <footer className="m-footer">
      <p className="m-footer-copy">
        <a href="https://twitter.com/{BLOG.twitter}">
          &copy;{BLOG.title}
        </a>
      </p>
    </footer>
  );
}
