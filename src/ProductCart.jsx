import { useState } from 'react';






const ProductCart = () => {
  const [activeTab, setActiveTab] = useState("Product");

  return (
    <div className="tabs tabs-box bg-white justify-center mt-4">
      <input 
        type="radio" 
        name="my_tabs_1" 
        className={`tab w-24 rounded-full mr-5 font-semibold ${activeTab === 'Product' ? 'bg-linear-to-r from-[#6D28D9] to-[#9333EA] text-white' : ''}`}
        onClick={() => setActiveTab("Product")}
        aria-label="Product" 
      />

      <input 
        type="radio" 
        name="my_tabs_1" 
        className={`tab w-24 rounded-full mr-5 font-semibold ${activeTab === 'Cart' ? 'bg-linear-to-r from-[#6D28D9] to-[#9333EA] text-white' : ''}`}
        onClick={() => setActiveTab("Cart")}  
        aria-label="Cart" 
        defaultChecked 
      />
    </div>
  );
};

export default ProductCart;