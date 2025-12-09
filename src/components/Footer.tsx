const Footer = () => {
  return (
    <footer id="footer" className="bg-[#01036f] text-white text-sm mt-auto font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* About Column */}
          <div className="footer-about">
            <a href="#" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-heading text-white">Bootslander</span>
            </a>
            <div className="footer-contact pt-3">
              <p className="mb-1">A108 Adam Street</p>
              <p className="mb-4">New York, NY 535022</p>
              <p className="mb-2"><strong>Phone:</strong> <span className="ml-1">+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span className="ml-1">info@example.com</span></p>
            </div>
            <div className="flex gap-2 mt-4">
              {['twitter-x', 'facebook', 'instagram', 'linkedin'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white/70 hover:text-[#1acc8d] hover:border-[#1acc8d] transition-all duration-300">
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4 className="text-base font-bold pb-3 mb-4 text-white">Useful Links</h4>
            <ul className="space-y-3">
              {['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'].map(link => (
                <li key={link} className="flex items-center">
                  <i className="bi bi-chevron-right text-[12px] mr-2 text-[#1acc8d]"></i>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links">
            <h4 className="text-base font-bold pb-3 mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Web Design', 'Web Development', 'Product Management', 'Marketing', 'Graphic Design'].map(link => (
                <li key={link} className="flex items-center">
                  <i className="bi bi-chevron-right text-[12px] mr-2 text-[#1acc8d]"></i>
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-300 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="text-base font-bold pb-3 mb-4 text-white">Our Newsletter</h4>
            <p className="mb-6 text-white/80">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form className="flex relative bg-white rounded border border-white/20 p-0 overflow-hidden">
              <input type="email" name="email" className="w-full bg-transparent text-gray-800 px-4 py-3 focus:outline-none border-none shadow-none" />
              <button type="submit" className="bg-[#1acc8d] text-white px-6 py-3 font-medium hover:bg-[#15bb80] transition-colors border-none -ml-1">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-1">© <span>Copyright</span> <strong className="px-1">Bootslander</strong> <span>All Rights Reserved</span></p>
          <div className="text-[13px] text-white/60">
            Designed by <a href="https://bootstrapmade.com/" className="text-[#1acc8d] hover:text-[#18d290]">BootstrapMade</a> Distributed By <a href="https://themewagon.com/" className="text-[#1acc8d] hover:text-[#18d290]">ThemeWagon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;