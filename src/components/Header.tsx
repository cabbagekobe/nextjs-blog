import Link from "next/link";

import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const name = "cabbagekobe";
export const siteTitle = "cabbaekobe.info";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{name}</a>
        </Link>
      </h1>
    </header>
  );
}
