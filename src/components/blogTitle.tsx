import Link from "next/link";
import PropTypes from "prop-types";

BlogTitle.propTypes = {
  blogTitle: PropTypes.string,
  href: PropTypes.string
};

export default function BlogTitle({ blogTitle, href }: any) {
  return (
    <h3>
      <Link href={href}>
        <a>{blogTitle}</a>
      </Link>
    </h3>
  );
}
