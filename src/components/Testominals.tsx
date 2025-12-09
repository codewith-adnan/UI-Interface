import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import Images
import Testimonials1 from '../assets/images/testimonials-1.jpg';
import Testimonials2 from '../assets/images/testimonials-2.jpg';
import Testimonials3 from '../assets/images/testimonials-3.jpg';
import Testimonials4 from '../assets/images/testimonials-4.jpg';
import Testimonials5 from '../assets/images/testimonials-5.jpg';
import TestimonialsBg from '../assets/images/testimonials-bg.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saul Goodman",
      role: "Ceo & Founder",
      image: Testimonials1,
      quote: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: Testimonials2,
      quote: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa."
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: Testimonials3,
      quote: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim."
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: Testimonials4,
      quote: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: Testimonials5,
      quote: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative dark-background">
      {/* Background Image Overlay */}
      <img src={TestimonialsBg} className="absolute inset-0 w-full h-full object-cover z-[1]" alt="" />
      <div className="absolute inset-0 bg-background/70 z-[2] bg-[#000000]/70"></div>

      <div className="container mx-auto px-4 relative z-[3]" data-aos="fade-up">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          speed={600}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center text-white">
                <img
                  src={item.image}
                  className="w-[100px] h-[100px] rounded-full border-4 border-white/15 mx-auto mb-4"
                  alt={item.name}
                />
                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                <h4 className="text-sm text-white/60 mb-4 uppercase">{item.role}</h4>

                <div className="text-[#ffc107] mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <i key={i} className="bi bi-star-fill mx-0.5"></i>)}
                </div>

                <p className="italic text-white/80 mx-auto lg:w-4/5 relative max-w-2xl">
                  <i className="bi bi-quote text-3xl text-white/40 absolute -top-4 -left-6"></i>
                  {item.quote}
                  <i className="bi bi-quote text-3xl text-white/40 absolute -bottom-6 -right-6 rotate-180"></i>
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !relative !bottom-0 mt-8"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;