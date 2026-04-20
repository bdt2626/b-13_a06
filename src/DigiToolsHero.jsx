import HeroImage from "./assets/banner.png"

const WatchDemoButton = () => (
  <button className="btn btn-outline btn-primary rounded-full px-6 flex items-center gap-2 group">
   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-none stroke-primary stroke-2"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
    <span className="text-base font-semibold group-hover:text-primary-content transition">
      Watch Demo
    </span>
  </button>
);

const DigiToolsHero = () => {
  return (
   
    <section className=" bg-base-100">
    
      <div className="hero-content  flex-col lg:flex-row-reverse max-w-360 gap-12 lg:gap-20 p-6 md:p-12 lg:p-16" >
     
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={HeroImage}
          
            className="w-full max-w-150 aspect-square object-cover rounded-3xl shadow-xl"
          />
        </div>

        <div className="lg:w-1/2 text-left space-y-6 lg:space-y-8 flex flex-col items-start">
        
          <div className="badge badge-primary badge-outline badge-lg rounded-full gap-2 text-sm font-medium py-4 px-5">
            {/* The small purple dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span>New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-base-content max-w-[15ch]">
            Supercharge Your Digital Workflow
          </h1>

          <p className="text-lg text-base-content/80 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

     
          <div className="flex flex-wrap gap-4 pt-2">
           
            <button className="btn bg-linear-to-r from-[#6D28D9] to-[#9333EA] rounded-full px-8 text-base font-bold text-base-100 shadow-lg">
              Explore Products
            </button>
            
            
            <WatchDemoButton />
          </div>
        </div>

      </div>
    </section>
  );
};

export default DigiToolsHero;