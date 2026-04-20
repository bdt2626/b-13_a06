import { Suspense, useState } from 'react'
import './App.css'
import DigiToolsNavbar from './DigiToolsNavbar'
import DigiToolsHero from './DigiToolsHero'
import StatsSection from './StatsSection'
import StepsSection from './StepsSection'
import PricingSection from './PricingSection'
import CtaSection from './CtaSection'
import FooterSection from './FooterSection'
import UnPack from './UnPack'
import PremiumTool from './PremiumTool'
import ProductCart from './ProductCart'
import Cart from './Cart'

const alldata = async () => {
  const res = await fetch("/dataPack.json");
  return res.json();
};
const dataPackPromise = alldata();


function App() {
  const [activeTab, setActiveTab] = useState("Product");
  const [addToCart, setAddToCart] = useState([]);

  

  return (
    <>
    <div className= "container mx-auto">

      <DigiToolsNavbar addToCart={addToCart} ></DigiToolsNavbar>
      <DigiToolsHero></DigiToolsHero>
      <StatsSection></StatsSection>
      <PremiumTool></PremiumTool>
     
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
        aria-label={`Cart (${addToCart.length})`}
        
      />
    </div>
    <div className="min-h-[60vh]">


    {activeTab === 'Product' && <Suspense fallback={<div className="h-screen" />}>

          <div className= "mt-25">
              <UnPack dataPackPromise ={dataPackPromise} addToCart={addToCart} setAddToCart={setAddToCart} > </UnPack> 
          </div>

      </Suspense> }

      {activeTab === 'Cart' && <Cart addToCart={addToCart} setAddToCart={setAddToCart}></Cart> }
      </div>
      
       

      <StepsSection></StepsSection>
       <PricingSection></PricingSection>
       <CtaSection></CtaSection>
      <FooterSection></FooterSection>
      
    </div>
   

    </>
  )
}

export default App
