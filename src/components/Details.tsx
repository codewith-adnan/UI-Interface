import Details1 from '../assets/images/details-1.png';
import Details2 from '../assets/images/details-2.png';
import Details3 from '../assets/images/details-3.png';
import Details4 from '../assets/images/details-4.png';

const Details = () => {
    return (
        <section id="details" className="py-16">
            {/* Section Title */}
            <div className="container mx-auto px-4 mb-12 text-center" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-2 text-heading">Details</h2>
                <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                    <span>Check Our</span> <span className="text-accent">Details</span>
                </div>
            </div>

            <div className="container mx-auto px-4">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="md:w-5/12" data-aos="zoom-out" data-aos-delay="100">
                        <img src={Details1} className="w-full h-auto" alt="" />
                    </div>
                    <div className="md:w-7/12" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-2xl font-bold mb-4 text-heading">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className="italic text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Ullam est qui quos consequatur eos accusamus.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="md:w-5/12 md:order-2" data-aos="zoom-out" data-aos-delay="200">
                        <img src={Details2} className="w-full h-auto" alt="" />
                    </div>
                    <div className="md:w-7/12 md:order-1" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="text-2xl font-bold mb-4 text-heading">Corporis temporibus maiores provident</h3>
                        <p className="italic text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <p className="text-gray-600">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                    <div className="md:w-5/12" data-aos="zoom-out">
                        <img src={Details3} className="w-full h-auto" alt="" />
                    </div>
                    <div className="md:w-7/12" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4 text-heading">Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                        <p className="text-gray-600 mb-4">Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="bi bi-check text-accent text-xl"></i>
                                <span>Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-5/12 md:order-2" data-aos="zoom-out">
                        <img src={Details4} className="w-full h-auto" alt="" />
                    </div>
                    <div className="md:w-7/12 md:order-1" data-aos="fade-up">
                        <h3 className="text-2xl font-bold mb-4 text-heading">Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                        <p className="italic text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <p className="text-gray-600">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Details;
