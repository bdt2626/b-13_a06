const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const PricingSection = () => {
  return (
    <section className="w-full py-20 bg-base-100 ">
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
        
     
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base-content/60 text-lg leading-normal">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* 1. Starter Plan */}
          <div className="flex flex-col flex-1 bg-white border border-base-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 leading-normal">Starter</h3>
            <p className="text-base-content/60 mb-6 leading-normal">Perfect for getting started</p>
            <div className="mb-8 leading-normal">
              <span className="text-4xl font-extrabold">$0</span>
              <span className="text-base-content/60 ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 grow leading-normal text-base-content/80">
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Access to 10 free tools</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Basic templates</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Community support</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> 1 project per month</li>
            </ul>
            <button className="btn bg-linear-to-r from-[#6D28D9] to-[#9333EA] rounded-full w-full py-6 text-base-100 font-bold mt-auto">
              Get Started Free
            </button>
          </div>

       
          <div className="relative flex flex-col flex-1 bg-linear-to-r from-[#6D28D9] to-[#9333EA] rounded-3xl p-8 shadow-xl text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C7] text-[#92400E] px-4 py-1 rounded-full text-sm font-bold shadow-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2 leading-normal">Pro</h3>
            <p className="text-white/80 mb-6 leading-normal">Best for professionals</p>
            <div className="mb-8 leading-normal">
              <span className="text-4xl font-extrabold">$29</span>
              <span className="text-white/80 ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 grow leading-normal">
              <li className="flex items-center gap-3"><CheckIcon /> Access to all premium tools</li>
              <li className="flex items-center gap-3"><CheckIcon /> Unlimited templates</li>
              <li className="flex items-center gap-3"><CheckIcon /> Priority support</li>
              <li className="flex items-center gap-3"><CheckIcon /> Unlimited projects</li>
              <li className="flex items-center gap-3"><CheckIcon /> Cloud sync</li>
              <li className="flex items-center gap-3"><CheckIcon /> Advanced analytics</li>
            </ul>
            <button className="btn bg-white hover:bg-white/90 border-none text-[#8B5CF6] rounded-full w-full py-6 font-bold mt-auto">
              Start Pro Trial
            </button>
          </div>

       
          <div className="flex flex-col flex-1 bg-white border border-base-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-2 leading-normal">Enterprise</h3>
            <p className="text-base-content/60 mb-6 leading-normal">For teams and businesses</p>
            <div className="mb-8 leading-normal">
              <span className="text-4xl font-extrabold">$99</span>
              <span className="text-base-content/60 ml-1">/Month</span>
            </div>
            <ul className="space-y-2 mb-10 grow leading-normal text-base-content/80">
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Everything in Pro</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Team collaboration</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Custom integrations</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Dedicated support</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> SLA guarantee</li>
              <li className="flex items-center gap-3"><span className="text-success"><CheckIcon /></span> Custom branding</li>
            </ul>
            <button className="btn bg-linear-to-r from-[#6D28D9] to-[#9333EA] rounded-full w-full py-6 text-base-100 font-bold mt-auto">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;