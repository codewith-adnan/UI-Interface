import { useState } from 'react';
import FaqImage from '../assets/images/faq.jpg';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Non consectetur a erat nam at lectus urna duis?",
            answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
        },
        {
            question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
            answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
        },
        {
            question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
            answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
        }
    ];

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Content Column */}
                    <div className="lg:w-7/12 order-2 lg:order-1 flex flex-col justify-center">
                        <div className="mb-12 px-4 lg:px-12" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-2xl font-bold text-heading mb-2">
                                <span className="text-default font-normal">Frequently Asked </span>
                                <strong>Questions</strong>
                            </h3>
                            <p className="text-default">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 px-4 lg:px-12" data-aos="fade-up" data-aos-delay="200">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`bg-white p-6 rounded relative cursor-pointer transition-all duration-300 hover:bg-[#fbfbfb] shadow-sm ${activeIndex === index ? 'shadow-md bg-[#fbfbfb]' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <div className="flex items-start gap-4">
                                        <i className="bi bi-question-circle text-accent text-xl mt-1 shrink-0"></i>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-heading hover:text-accent transition-colors duration-300">
                                                {faq.question}
                                            </h3>
                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <p className="text-default text-sm leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <i className={`bi bi-chevron-right text-heading transition-transform duration-300 shrink-0 ${activeIndex === index ? 'rotate-90' : ''}`}></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="lg:w-5/12 order-1 lg:order-2">
                        <img
                            src={FaqImage}
                            className="w-full h-auto rounded-lg"
                            alt="FAQ"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
