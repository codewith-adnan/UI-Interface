const Stats = () => {
  const stats = [
    { icon: "bi-emoji-smile", count: 232, label: "Happy Clients" },
    { icon: "bi-journal-richtext", count: 521, label: "Projects" },
    { icon: "bi-headset", count: 1463, label: "Hours Of Support" },
    { icon: "bi-people", count: 15, label: "Hard Workers" },
  ];

  return (
    <section id="stats" className="py-16 light-background">
      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-item flex flex-col items-center relative p-8 bg-surface shadow-lg rounded-md mt-[-27px] z-0">
              <i className={`bi ${stat.icon} text-accent text-2xl bg-surface shadow-[0px_2px_25px_rgba(0,0,0,0.1)] w-[54px] h-[54px] flex items-center justify-center rounded-full border-2 border-background z-10 absolute -top-[27px]`}></i>
              <span className="text-4xl font-bold text-default/80 mt-4 block">{stat.count}</span>
              <p className="p-0 m-0 font-heading text-base text-default/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;