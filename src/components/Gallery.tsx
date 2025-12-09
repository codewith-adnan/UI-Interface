import Gallery1 from '../assets/images/gallery-1.jpg';
import Gallery2 from '../assets/images/gallery-2.jpg';
import Gallery3 from '../assets/images/gallery-3.jpg';
import Gallery4 from '../assets/images/gallery-4.jpg';
import Gallery5 from '../assets/images/gallery-5.jpg';
import Gallery6 from '../assets/images/gallery-6.jpg';
import Gallery7 from '../assets/images/gallery-7.jpg';
import Gallery8 from '../assets/images/gallery-8.jpg';

const Gallery = () => {
  const images = [
    Gallery1, Gallery2, Gallery3, Gallery4,
    Gallery5, Gallery6, Gallery7, Gallery8
  ];

  return (
    <section id="gallery" className="py-16 bg-background">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12" data-aos="fade-up">
        <div className="text-center sm:text-left">
          <h2 className="text-sm font-medium tracking-[1.5px] uppercase text-default/50 relative inline-block after:content-[''] after:w-[120px] after:h-[1px] after:bg-accent after:inline-block after:ml-2.5 after:mb-1">
            Gallery
          </h2>
          <div className="font-heading text-3xl font-bold text-heading uppercase mt-1">
            <span className="text-default">Check Our</span> <span className="text-accent">Gallery</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden border-r-[3px] border-b-[3px] border-background relative group">
              {/* Replace src with your actual image path, e.g., /assets/img/... */}
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;