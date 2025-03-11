import { useState, useEffect } from "react";
import styles from "./productlist.module.css";
import useProduct from "../../hooks/useProduct";
import { backendURL } from "../../services/settings";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const {
    title,
    setTitle,
    price,
    setPrice,
    discount,
    setDiscount,
    file,
    setFile,
    updateProduct,
    deleteProduct,
  } = useProduct();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${backendURL}/products/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditMode(true);
    setCurrentProduct(product);
    setTitle(product.title);
    setPrice(product.price);
    setDiscount(product.discount);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (currentProduct) {
      await updateProduct(currentProduct._id, e);
      setEditMode(false);
      setCurrentProduct(null);
      const response = await fetch(`${backendURL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      const response = await fetch(`${backendURL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product List</h1>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.list}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id} className={styles.listItem}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.price}><strong>Price:</strong> {product.price}kr</p>
              <p className={styles.discount}><strong>Discount:</strong> {product.discount}%</p>
              <img
                src={`${product.image}`}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.buttonDiv}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
              {editMode && currentProduct && currentProduct._id === product._id && (
                <form className={styles.form} onSubmit={handleUpdate}>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className={styles.input}
                  />
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    className={styles.input}
                  />
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    placeholder="Discount %"
                    className={styles.input}
                  />
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className={styles.input}
                  />
                  <button type="submit" className={styles.button}>Update Product</button>
                  <button
                    type="button"
                    className={styles.buttonSecondary}
                    onClick={() => setEditMode(false)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </li>
          ))
        ) : (
          <p className={styles.empty}>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
