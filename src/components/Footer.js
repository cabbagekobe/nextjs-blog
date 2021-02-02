import { Site } from "@/site";

export default function Footer() {
  return (
    <footer>
      <p>
        <a href="https://twitter.com/cabbagekobe">
          &copy;{Site.title}
        </a>
      </p>
    </footer>
  );
}
