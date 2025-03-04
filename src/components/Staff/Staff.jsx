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
      <h1>Staff</h1>
        {staff.map((staff) => (
            <StaffCard key={staff._id} staff={staff} />
        ))}
    </div>
  );
};

export default Staff;
