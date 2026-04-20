const StepsSection = () => {
  return (
    <section className="container py-20 bg-[#f9fafc] mt-20 mx-auto">
      <div className="w-auto max-w-none px-6 md:px-12 lg:px-20 mx-auto">
        
       
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
       
          <div className="relative bg-white border border-base-200 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-6 right-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
              01
            </div>
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Create Account</h3>
            <p className="text-base-content/60 leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

       
          <div className="relative bg-white border border-base-200 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-6 right-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
              02
            </div>
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Choose Products</h3>
            <p className="text-base-content/60 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

         
          <div className="relative bg-white border border-base-200 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-6 right-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
              03
            </div>
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 8.41m5.96 5.96a14.96 14.96 0 0 1-5.96 5.96m5.96-5.96L13.89 12.3m0 0a13.5 13.5 0 0 1-12.3-12.3l.03.66a13.5 13.5 0 0 0 12.27 11.64Z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Start Creating</h3>
            <p className="text-base-content/60 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepsSection;