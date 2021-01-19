import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const name = "cabbagekobe";
export const siteTitle = "cabbaekobe.info";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={utilStyles.headingSd}>
        <a href="https://twitter.com/cabbagekobe">
          &copy; {name}
        </a>
      </p>
    </footer>
  );
}
