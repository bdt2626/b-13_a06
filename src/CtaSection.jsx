const CtaSection = () => {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-linear-to-r from-[#6D28D9] to-[#9333EA] py-20 md:py-28 mt-20">
      
      <div className="w-full max-w-360 mx-auto px-6 text-center text-white flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

       
        <p className="text-white text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

      
        <div className="flex flex-wrap gap-4 mb-10 items-center justify-center">
          
       
          <button className="btn bg-white hover:bg-white/90 border-none rounded-full px-8 text-base font-bold text-[#8B5CF6]">
            Explore Products
          </button>
         
          <button className="btn btn-outline border-white hover:bg-white hover:text-[#8B5CF6] text-white rounded-full px-8 text-base font-bold transition">
            View Pricing
          </button>
        </div>

    
        <p className="text-white text-sm md:text-base leading-tight">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CtaSection;