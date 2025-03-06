import { Outlet, useNavigate } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

const BackOffice = () => {
    const navigate = useNavigate();

    return (
        <div>
            <article>
                <ProductList></ProductList>
                <button onClick={() => navigate('/backoffice/products')}>Enter Products</button>
                <button onClick={() => navigate('/backoffice')}>Exit Products</button>
                <Outlet />
            </article>
        </div>
    );
};

export default BackOffice;
