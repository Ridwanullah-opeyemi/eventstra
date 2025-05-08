import { useState } from "react";
import "./product.css";

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [product, setProduct] = useState({
        title: "",
        description: ""
    });

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

    const sendProduct = async (e) => {
        e.preventDefault();

        if (!product.title || !product.description || !image) {
            alert("All fields are required.");
            return;
        }

        const formData = new FormData();
        formData.append("title", product.title);
        formData.append("description", product.description);
        formData.append("image", image); 

        console.log(image.name);
        
        try {
            const baseUrl = "https://enentstar.onrender.com/addproduct";
            const res = await fetch(baseUrl, {
                method: "POST",
                body: formData,
                headers: {
                    "authentication": `Bearer ${localStorage.getItem("token")}` 
                }
            });
            

            if (!res.ok) {
                console.log("Error posting data");
                return;
            }

            const data = await res.json();
            console.log("Upload successful:", data);
        } catch (error) {
            console.log("Upload failed:", error);
        }
    };

    return (
        <>
            <h1>Add Product</h1>
            <div className="proCon">
                <form onSubmit={sendProduct}>
                    <div className="inpbox">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={handleInput} name="title" id="title" />
                    </div>

                    <div className="inpbox">
                        <label htmlFor="image">Image</label>
                        <input type="file" onChange={handleImage} name="image" id="image" accept="image/*" />
                    </div>
                        {preview && (
                            <div className="imgconpreview">
                                <img src={preview} alt="Preview" />
                            </div>
                        )}

                    <div className="inpbox">
                        <label htmlFor="description">Description</label>
                        <textarea onChange={handleInput} name="description" id="description" />
                    </div>

                    <div className="btnCon">
                        <button type="submit">Add to store</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;
