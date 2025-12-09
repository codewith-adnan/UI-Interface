const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: 0,
      featured: false,
      features: [
        { name: "Quam adipiscing vitae proin", active: true },
        { name: "Nec feugiat nisl pretium", active: true },
        { name: "Nulla at volutpat diam uteera", active: true },
        { name: "Pharetra massa massa ultricies", active: false },
        { name: "Massa ultricies mi quis hendrerit", active: false },
        { name: "Voluptate id voluptas qui sed aperiam rerum", active: false },
        { name: "Iure nihil dolores recusandae odit voluptatibus", active: false },
      ]
    },
    {
      name: "Business Plan",
      price: 29,
      featured: true,
      features: [
        { name: "Quam adipiscing vitae proin", active: true },
        { name: "Nec feugiat nisl pretium", active: true },
        { name: "Nulla at volutpat diam uteera", active: true },
        { name: "Pharetra massa massa ultricies", active: true },
        { name: "Massa ultricies mi quis hendrerit", active: true },
        { name: "Voluptate id voluptas qui sed aperiam rerum", active: true },
        { name: "Iure nihil dolores recusandae odit voluptatibus", active: false },
      ]
    },
    {
      name: "Developer Plan",
      price: 49,
      featured: false,
      features: [
        { name: "Quam adipiscing vitae proin", active: true },
        { name: "Nec feugiat nisl pretium", active: true },
        { name: "Nulla at volutpat diam uteera", active: true },
        { name: "Pharetra massa massa ultricies", active: true },
        { name: "Massa ultricies mi quis hendrerit", active: true },
        { name: "Voluptate id voluptas qui sed aperiam rerum", active: true },
        { name: "Iure nihil dolores recusandae odit voluptatibus", active: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4 mb-12" data-aos="fade-up">
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-medium tracking-[1.5px] uppercase text-default/50 relative inline-block after:content-[''] after:w-[120px] after:h-[1px] after:bg-accent after:inline-block after:ml-2.5 after:mb-1">Pricing</h2>
          <div className="font-heading text-3xl font-bold text-heading uppercase mt-1">
            <span className="text-default">Check Our</span> <span className="text-accent">Pricing</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-10 rounded-2xl h-full ${plan.featured ? 'shadow-xl z-10 scale-105 bg-white border-2 border-accent' : 'bg-accent/5 z-0'}`} 
              data-aos="zoom-in" 
              data-aos-delay={(index + 1) * 100}
            >
              {plan.featured && (
                <span className="absolute top-4 right-4 bg-accent text-white text-sm font-medium px-4 py-1 rounded-md">Popular</span>
              )}
              
              <h3 className="font-semibold text-xl mb-4">{plan.name}</h3>
              <h4 className="text-accent text-5xl font-bold font-heading mb-0">
                <sup className="text-3xl">$</sup>{plan.price}<span className="text-default/50 text-lg font-medium"> / month</span>
              </h4>
              
              <div className="mt-6 mb-2 text-center">
                 <a href="#" className={`inline-block px-9 py-2.5 rounded-md font-heading font-medium transition-all border border-default text-default hover:bg-accent hover:text-white hover:border-accent ${plan.featured ? 'bg-accent text-white border-accent' : ''}`}>
                   Start a free trial
                 </a>
              </div>
              <p className="text-center text-xs mb-6">No credit card required</p>

              <ul className="space-y-3 text-default/70 text-sm">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center ${!feature.active ? 'text-default/40 line-through decoration-default/40' : ''}`}>
                    {feature.active ? 
                      <i className="bi bi-check text-[#059652] text-xl mr-2"></i> : 
                      <i className="bi bi-x text-default/40 text-xl mr-2"></i>
                    }
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;