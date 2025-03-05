import useProduct from "../../hooks/useProduct";
import styles from "./productform.module.css";

const ProductForm = () => {
  const {
    createProduct,
    title,
    setTitle,
    price,
    setPrice,
    discount,
    setDiscount,
    image,
    setImage,
    error,
    success,
    setSuccess
  } = useProduct();

  const handleSubmission = async (e) => {
    e.preventDefault();
    await createProduct(e);
    setSuccess(true);
    clearProduct();
  };

  const clearProduct = () => {
    setTitle("");
    setPrice("");
    setDiscount("");
    setImage("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create New Product</h1>
      <form onSubmit={handleSubmission} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            type="number"
            id="price"
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="discount" className={styles.label}>
            Discount (%)
          </label>
          <input
            type="number"
            id="discount"
            className={styles.input}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="image" className={styles.label}>
            Image URL
          </label>
          <input
            type="text"
            id="image"
            className={styles.input}
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Create Product
        </button>
      </form>

      {success && (
        <p className={styles.success}>Product created successfully!</p>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ProductForm;
