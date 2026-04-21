import { toast } from "react-toastify";

const SingleData = ({ dataPack, addToCart, setAddToCart }) => {
  
  const isAlreadyInCart = addToCart.some((item) => item.id === dataPack.id);

  const tagStyles = {
    "Best Seller": "bg-orange-100 text-orange-600",
    "Popular": "bg-indigo-100 text-indigo-600",
    "New": "bg-emerald-100 text-emerald-600",
  };
  const currentStyle = tagStyles[dataPack.tag] || "bg-gray-100 text-gray-600";

  const handleButtonClick = (e) => {
    e.preventDefault(); 

    if (isAlreadyInCart) {
      toast.info("Already in the cart", { toastId: `exists-${dataPack.id}` });
      return;
    }

    setAddToCart((prev) => [...prev, dataPack]);
    toast.success("Added to cart!", { toastId: `add-${dataPack.id}` });
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl rounded-[2.5rem] px-8 pb-8 pt-5 relative flex flex-col h-full overflow-hidden">
   
      <div className="absolute top-7 right-7">
        <span className={`badge border-none font-bold py-4 px-4 rounded-full text-[11px] uppercase tracking-wide ${currentStyle}`}>
          {dataPack.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-gray-200 bg-white shrink-0">
        <img src={dataPack.iconPath} alt={dataPack.title} className="w-8 h-8 object-contain" />
      </div>

      <div className="grow mt-10">
        <h2 className="text-[26px] font-extrabold text-slate-800 mb-4 leading-tight">
          {dataPack.title}
        </h2>
        <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
          {dataPack.description}
        </p>

        <div className="mb-8 h-10 flex items-baseline gap-1">
          <span className="text-4xl font-black text-slate-900">{dataPack.price.split("/")[0]}</span>
          <span className="text-slate-400 font-semibold text-lg">/{dataPack.price.split("/")[1]}</span>
        </div>

        <ul className="space-y-4 mb-10">
          {dataPack.features.map((feature, idx) => (
            <li key={`${dataPack.id}-f-${idx}`} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleButtonClick}
        disabled={isAlreadyInCart}
        className={`btn w-full border-none text-white font-bold rounded-2xl h-15 min-h-15 normal-case text-lg shadow-lg transition-colors duration-300 transform active:scale-95 ${
          isAlreadyInCart 
            ? "bg-green-500 cursor-default" 
            : "bg-linear-to-r from-[#6D28D9] to-[#9333EA] hover:opacity-90"
        }`}
      >
        {isAlreadyInCart ? "✓ Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default SingleData;