const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          
          {/* Content */}
          <div className="xl:w-5/12">
            <h3 className="text-accent bg-accent/5 px-5 py-2.5 rounded-md inline-block font-medium mb-4">About Us</h3>
            <h2 className="text-heading text-3xl font-bold mb-4">Ducimus rerum libero reprehenderit cumque</h2>
            <p className="text-default mb-6 leading-relaxed">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <a href="#" className="inline-flex items-center bg-accent text-contrast px-6 py-3 rounded-md font-heading font-medium hover:bg-accent/80 transition-all group">
              <span>Read More</span>
              <i className="bi bi-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
            </a>
          </div>

          {/* Icon Boxes */}
          <div className="xl:w-7/12">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: "bi-buildings", title: "Eius provident" },
                { icon: "bi-clipboard-pulse", title: "Rerum aperiam" },
                { icon: "bi-command", title: "Veniam omnis" },
                { icon: "bi-graph-up-arrow", title: "Delares sapiente" },
              ].map((item, index) => (
                <div key={index} className={`bg-surface p-10 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 ${index % 2 !== 0 ? 'md:mt-10' : ''}`} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <i className={`bi ${item.icon} text-3xl text-accent bg-accent/5 w-20 h-20 flex items-center justify-center rounded-full mb-6`}></i>
                  <h3 className="text-xl font-bold mb-3 text-heading">{item.title}</h3>
                  <p className="text-default text-sm">Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;