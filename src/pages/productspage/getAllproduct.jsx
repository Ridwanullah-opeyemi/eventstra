import { useEffect, useState } from "react";
import "./productList.css";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://enentstar.onrender.com/products");
                const data = await res.json();
                setProducts(data.products);
            } catch (err) {
                console.error("Failed to load products:", err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product._id} className="product-card">
                    <h2 className="product-title">{product.title}</h2>
                    <img src={product.image} alt={product.title} className="product-image" />
                    <p className="product-description">{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
