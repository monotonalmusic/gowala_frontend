import StaffCard from "../StaffCard/StaffCard";
import useFetch from "../../hooks/useFetch";
import styles from "./staff.module.css";

const Staff = () => {
  const {
    data: staff,
    loading,
    error,
  } = useFetch("http://localhost:3042/employees");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.staffContainer}>
      <div className={styles.staffTextDiv}>
        <h1>Vores hold</h1>
        <h2>2000+ ansatte siden 1975</h2>
        <h4>
          De ansatte på Gowala Farms er passionerede fagfolk, der med omsorg og
          ekspertise sikrer sunde dyr og produkter af højeste kvalitet.
        </h4>
      </div>

      {staff.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </div>
  );
};

export default Staff;
