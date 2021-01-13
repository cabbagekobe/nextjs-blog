import Link from "next/link";

BlogTitle.propTypes = {
  blogTitle: PropTypes.string,
  href: PropTypes.string
};

export default function BlogTitle({ blogTitle, href }) {
  return (
    <h3>
      <Link href={href}>
        <a>{blogTitle}</a>
      </Link>
    </h3>
  );
}
