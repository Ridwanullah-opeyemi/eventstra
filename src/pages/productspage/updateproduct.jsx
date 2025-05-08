import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./product.css";

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ title: "", description: "" });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:3001/products`);
            const data = await res.json();
            const current = data.products.find(p => p._id === id);
            if (current) {
                setProduct({ title: current.title, description: current.description });
                setPreview(current.image);
            }
        };
        fetchProduct();
    }, [id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        if (image) formData.append("image", image);

        const res = await fetch(`https://enentstar.onrender.com/update/${id}`, {
            method: "PUT",
            body: formData,
        });

        const data = await res.json();
        console.log(data);
        if (res.ok) navigate("/products");
    };

    return (
        <div className="proCon">
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className="inpbox">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleInput}
                    />
                </div>

                <div className="inpbox">
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" onChange={handleImage} />
                </div>

                {preview && (
                    <div className="imgconpreview">
                        <img src={preview} alt="Preview" />
                    </div>
                )}

                <div className="inpbox">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleInput}
                    />
                </div>

                <div className="btnCon">
                    <button type="submit">Update Product</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;
