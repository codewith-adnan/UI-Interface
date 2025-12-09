const Features = () => {
  const features = [
    { name: "Lorem Ipsum", icon: "bi-eye", color: "#ffbb2c" },
    { name: "Dolor Sitema", icon: "bi-infinity", color: "#5578ff" },
    { name: "Sed perspiciatis", icon: "bi-mortarboard", color: "#e80368" },
    { name: "Magni Dolores", icon: "bi-nut", color: "#e361ff" },
    // ... add other items
  ];

  return (
    <section id="features" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-center p-5 bg-surface border border-default/10 rounded hover:border-accent transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <i className={`bi ${item.icon} text-3xl mr-4`} style={{ color: item.color }}></i>
              <h3 className="font-bold text-base m-0">
                <a href="#" className="text-heading group-hover:text-accent transition-colors stretched-link">{item.name}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;