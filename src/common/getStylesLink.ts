import styles from "../components/Site.module.css";

export const getStylesLink = ({isActive}: {isActive: boolean}) => {
  return isActive ? styles.activeLink : styles.link
}