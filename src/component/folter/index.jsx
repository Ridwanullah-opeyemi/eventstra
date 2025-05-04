import React from "react";
import "./starfoodFlyer.css"; // Make sure this CSS file is imported

const StarFoodFlyer = () => {
  return (
    <div className="flyer-container">
        <div className="flyer">
            <div className="flyer-header">
                <h1>🌟 StarFood</h1>
                <p>Fresh Food, Fast Delivery!</p>
            </div>

            <div className="flyer-info">
                <p>🛵 Delivering to <strong>Lagos & Ogun</strong> every Thursday</p>
                <p>🥩 Live Cow • Fresh Beef • Cow-Sharing Options</p>
            </div>
        </div>

        <div className="flyer">
            <div className="flyer-section">
                <h2>🍽️ Popular Categories</h2>
                <ul>
                <li>Baby Food</li>
                <li>Cereals & Grains</li>
                <li>Snacks & Biscuits</li>
                <li>Drinks & Beverages</li>
                <li>Frozen Meat</li>
                </ul>
            </div>

            <div className="flyer-section">
                <h2>💰 Join Our Discount Club!</h2>
                <p>✨ Enjoy exclusive offers and deals</p>
                <p>📦 Wholesale supplies available</p>
                <p>📈 Partner with us on ranching investments!</p>
            </div>

        </div>

      <div className="flyer-contact">
        <h2>📲 Order Now</h2>
        <p>🟢 WhatsApp: <a href="https://wa.me/2349031787037">+234 903 1787 037</a></p>
        <p>🔵 Facebook: <a href="https://facebook.com/starfoodng">StarFood Nigeria</a></p>
        <p>📞 Call: +234 814 364 2387 | +234 908 1707 267</p>
      </div>

      <div className="flyer-footer">
        <p>🛒 <em>www.starfood.ng</em> (Coming Soon)</p>
      </div>
    </div>
  );
};

export default StarFoodFlyer;
