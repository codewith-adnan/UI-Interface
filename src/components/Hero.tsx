import HeroBg from '../assets/images/hero-bg-2.jpg';
import HeroImg from '../assets/images/hero-img.png';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[70vh] flex items-center pt-32 pb-32 dark-background overflow-hidden">
      {/* Background Image */}
      <img src={HeroBg} alt="" className="absolute inset-0 w-full h-full object-cover z-[1]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08005e]/95 z-[2]"></div>

      <div className="container mx-auto px-4 relative z-[3]">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Image Side (Order Last on Desktop per template) */}
          <div className="lg:w-3/12 lg:order-last flex justify-center" data-aos="zoom-out">
            <img src={HeroImg} className="max-w-full h-auto animate-up-down" alt="" />
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-white/70 mb-5 leading-tight">
              Build Your Landing Page With <span className="text-white border-b-4 border-accent">Bootslander</span>
            </h1>
            <p className="text-white/70 text-xl lg:text-2xl mb-8 font-light">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="flex gap-6 items-center">
              <a href="#about" className="bg-accent text-contrast font-heading font-normal px-7 py-2.5 rounded-full shadow-lg hover:bg-accent/85 transition-all">
                Get Started
              </a>
              <a href="#" className="flex items-center text-white font-semibold hover:text-accent transition-colors">
                <i className="bi bi-play-circle text-3xl mr-2 text-accent"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SVG Waves */}
      <svg className="absolute bottom-0 left-0 w-full h-[60px] z-[3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="wave-animate opacity-60 fill-white" style={{ animationDuration: '10s', animationDelay: '-2s' }}>
          <use href="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave-animate opacity-40 fill-white" style={{ animationDuration: '8s', animationDelay: '-2s' }}>
          <use href="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave-animate fill-white" style={{ animationDuration: '6s', animationDelay: '-2s' }}>
          <use href="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default Hero;