import ProductsCard from "../ProductsCard/ProductsCard";
import useFetch from "../../hooks/useFetch";
import styles from "./products.module.css";

const Products = ({ text, limit, sortAlphabetically }) => {
    const { data: products, loading, error } = useFetch(
        "http://localhost:3042/products"
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Sort products alphabetically if the toggle is on
    const sortedProducts = sortAlphabetically
        ? [...products].sort((a, b) => a.title.localeCompare(b.title))
        : products;

    return (
        <div className={styles.productsContainer}>
            <h2>{text}</h2>
            {sortedProducts
                .slice(0, limit || sortedProducts.length)
                .map((product) => (
                    <ProductsCard key={product._id} product={product} />
                ))}
        </div>
    );
};

export default Products;
