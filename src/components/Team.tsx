import Team1 from '../assets/images/team-1.jpg';
import Team2 from '../assets/images/team-2.jpg';
import Team3 from '../assets/images/team-3.jpg';

const Team = () => {
    return (
        <section id="team" className="team section py-16">
            {/* Section Title */}
            <div className="container mx-auto px-4 mb-12" data-aos="fade-up">
                <div className="text-center sm:text-left">
                    <h2 className="text-sm font-medium tracking-[1.5px] uppercase text-default/50 relative inline-block after:content-[''] after:w-[120px] after:h-[1px] after:bg-accent after:inline-block after:ml-2.5 after:mb-1">
                        Team
                    </h2>
                    <div className="font-heading text-3xl font-bold text-heading uppercase mt-1">
                        <span className="text-default">Check Our</span> <span className="text-accent">Team</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Team Member 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative group" data-aos="fade-up" data-aos-delay="100">
                        <div className="pic overflow-hidden relative">
                            <img src={Team1} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" alt="Walter White" />
                        </div>
                        <div className="p-6 relative">
                            <h4 className="text-lg font-bold text-heading">Walter White</h4>
                            <span className="text-sm text-gray-500 mb-4 block">Chief Executive Officer</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-twitter-x"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative group" data-aos="fade-up" data-aos-delay="200">
                        <div className="pic overflow-hidden relative">
                            <img src={Team2} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" alt="Sarah Jhonson" />
                        </div>
                        <div className="p-6 relative">
                            <h4 className="text-lg font-bold text-heading">Sarah Jhonson</h4>
                            <span className="text-sm text-gray-500 mb-4 block">Product Manager</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-twitter-x"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative group" data-aos="fade-up" data-aos-delay="300">
                        <div className="pic overflow-hidden relative">
                            <img src={Team3} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" alt="William Anderson" />
                        </div>
                        <div className="p-6 relative">
                            <h4 className="text-lg font-bold text-heading">William Anderson</h4>
                            <span className="text-sm text-gray-500 mb-4 block">CTO</span>
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-twitter-x"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-accent hover:text-white transition-colors"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Team;
