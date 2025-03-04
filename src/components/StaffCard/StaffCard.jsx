import styles from "./staffcard.module.css";

const StaffCard = ({ staff }) => {
  return (
    <div className={styles.staffCard}>
      <img src={staff.image} alt="" className={styles.staffImage}/>
      <div className={styles.staffTextContainer}>
        <h2 className={styles.staffName}>{staff.name}</h2>
        <p className={styles.staffText}>{staff.text}</p>
      </div>
    </div>
  );
};

export default StaffCard;
