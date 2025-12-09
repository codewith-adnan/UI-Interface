const Footer = () => {
  return (
    <footer className="bg-[#08005e] text-sm mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <a href="index.html" className="flex items-center mb-6">
              <span className="text-2xl font-bold tracking-wider font-heading text-heading">Bootslander</span>
            </a>
            <p className="mb-4">A108 Adam Street<br />New York, NY 535022</p>
            <p className="mb-2"><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
            <div className="flex gap-2 mt-4">
              {['twitter-x', 'facebook', 'instagram', 'linkedin'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all">
                  <i className={`bi bi-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold pb-3 mb-4 relative text-heading">Useful Links</h4>
            <ul className="space-y-3">
              {['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'].map(link => (
                <li key={link} className="flex items-center">
                  <i className="bi bi-chevron-right text-xs mr-2"></i>
                  <a href="#" className="text-white/70 hover:text-accent">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ... Add Services Column ... */}

          <div className="lg:col-span-1">
            <h4 className="text-base font-bold pb-3 mb-4 relative text-heading">Our Newsletter</h4>
            <p className="mb-6">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form className="flex relative bg-background p-1.5 rounded border border-white/20">
              <input type="email" className="w-full bg-transparent text-default px-4 py-1 focus:outline-none" />
              <button type="submit" className="bg-accent text-contrast px-5 py-2 rounded font-medium hover:bg-accent/80 transition-all">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center">
        <div className="container mx-auto px-4">
          <p>© <span>Copyright</span> <strong className="px-1">Bootslander</strong> <span>All Rights Reserved</span></p>
          <div className="text-xs mt-2 text-white/60">
            Designed by <a href="https://bootstrapmade.com/" className="text-accent">BootstrapMade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;