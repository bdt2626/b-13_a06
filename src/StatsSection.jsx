const StatsSection = () => {
  return (
   
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-linear-to-r from-[#6D28D9] to-[#9333EA] py-8 md:py-12">



      
      
  <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">        
        {/* --- Stat 1 --- */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">50K+</h2>
          <p className="text-sm md:text-base font-medium text-white/90 mt-2">Active Users</p>
        </div>

       
        <div className="hidden md:block h-20 w-px bg-white/30"></div>

        {/* --- Stat 2 --- */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">200+</h2>
          <p className="text-sm md:text-base font-medium text-white/90 mt-2">Premium Tools</p>
        </div>

      
        <div className="hidden md:block h-20 w-px bg-white/30"></div>

        
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">4.9</h2>
          <p className="text-sm md:text-base font-medium text-white/90 mt-2">Rating</p>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;