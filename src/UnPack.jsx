import {use} from "react";
import SingleData from "./SingleData";


const UnPack = ({dataPackPromise, addToCart, setAddToCart}) => {
    const dataPacks = use (dataPackPromise)

  return (
    <section >
    
    
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch rounded-3xl mt-12.5">
        {dataPacks.map(dataPack => 
        <SingleData key={dataPack.id} dataPack={dataPack} addToCart={addToCart} setAddToCart={setAddToCart}></SingleData>
            
        )}
    </div>
    </section>
  
   


  
  );
};




export default UnPack;