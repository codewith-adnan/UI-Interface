import React, { useState } from 'react';
// Change import from 'react-icons/bi' to 'react-icons/bs'
import { BsGeoAlt, BsPhone, BsEnvelope } from 'react-icons/bs';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submitting
    setTimeout(() => {
      setLoading(false);
      alert("Message sent!");
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="mb-12" data-aos="fade-up">
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-medium tracking-[1.5px] uppercase text-default/50 relative inline-block after:content-[''] after:w-[120px] after:h-[1px] after:bg-accent after:inline-block after:ml-2.5 after:mb-1">
              Contact
            </h2>
            <div className="font-heading text-3xl font-bold text-heading uppercase mt-1">
              <span className="text-default">Check Our</span> <span className="text-accent">Contact</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/3 space-y-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0 mr-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {/* Updated Icon */}
                <BsGeoAlt />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading">Address</h3>
                <p className="text-sm text-default">A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0 mr-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {/* Updated Icon */}
                <BsPhone />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading">Call Us</h3>
                <p className="text-sm text-default">+1 5589 55488 55</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0 mr-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {/* Updated Icon */}
                <BsEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-bold text-heading">Email Us</h3>
                <p className="text-sm text-default">info@example.com</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                required
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Message"
                className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                required
              ></textarea>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-white px-8 py-3 rounded-full hover:bg-accent-hover transition-colors disabled:opacity-70"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;