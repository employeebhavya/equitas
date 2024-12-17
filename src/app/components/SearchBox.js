import { BiSearch } from "react-icons/bi"; // Import the search icon
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
      <div className={styles.searchIcon}>
        <BiSearch />
      </div>
    </div>
  );
}
