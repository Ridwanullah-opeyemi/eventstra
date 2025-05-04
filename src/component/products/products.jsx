import { useState, useEffect } from "react";
import produc from "/public/data/product.json";
import "./productStyle.css";

const Products = () => {
  const [counts, setCounts] = useState({});
  const [categorySamples, setCategorySamples] = useState([]);

  const max = 25;

  // Get one product per category
  useEffect(() => {
    const seenCategories = new Set();
    const samples = [];

    for (const item of produc) {
      if (!seenCategories.has(item.category)) {
        seenCategories.add(item.category);
        samples.push(item);
      }
    }

    setCategorySamples(samples);
  }, []);

  const increment = (id) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) + 1;
      if (newCount > max) {
        alert("Maximum reached");
        return prev;
      }
      return { ...prev, [id]: newCount };
    });
  };

  const decrement = (id) => {
    setCounts(prev => {
      const newCount = (prev[id] || 0) - 1;
      if (newCount < 0) {
        alert("Minimum reached");
        return prev;
      }
      return { ...prev, [id]: newCount };
    });
  };

  return (
    <>
      <div>Product Samples by Category</div>
      <hr />
      <div className="productsCon">
        {categorySamples.map((item) => (
          <div className="card" key={item.id || item.name}>
            <div className="cardcart">{item.category}</div>
            <img src={item.image} alt={item.name} />
            <div className="cardName">{item.name}</div>
            <div className="cardPrice"><strong>N</strong>{item.price}</div>
            <div>{item.description}</div>
            <div className="cardcart">
              <button onClick={() => increment(item.id || item.name)}> + </button>
              <span>
                {counts[item.id || item.name] || 0}
    

    
              </span>
              <button onClick={() => decrement(item.id || item.name)}> - </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
