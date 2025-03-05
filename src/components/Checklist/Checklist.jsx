import styles from "./checklist.module.css";

const Checklist = ({ items }) => {
  return (
    <ul className={styles.checklist}>
      {items.map((item, index) => (
        <li key={index} className={styles.checklistItem}>
          <span className={styles.checkIcon}></span>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Checklist;
