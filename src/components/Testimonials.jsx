import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "This platform has revolutionized how we manage our portfolio. The automation and analytics capabilities are simply outstanding.",
            author: "Sarah Chen",
            position: "Portfolio Manager",
            company: "Quantum Asset Management",
            image: "SC"
        },
        {
            quote: "The integration was seamless, and the ROI was evident within the first quarter. Their risk analytics have become an integral part of our strategy.",
            author: "Michael Rivera",
            position: "Chief Investment Officer",
            company: "Atlas Capital Partners",
            image: "MR"
        },
        {
            quote: "We've seen a 40% reduction in analysis time and significantly improved our decision-making process with their advanced analytics.",
            author: "Emma Thompson",
            position: "Head of Trading",
            company: "Meridian Investments",
            image: "ET"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl font-medium text-gray-900 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-gray-600">
                        See what our clients have to say about their experience
                    </p>
                </motion.div>

                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center snap-x snap-mandatory">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full min-w-[280px] max-w-sm flex-none snap-center lg:flex-1 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative"
                        >
                            <Quote className="w-10 h-10 text-blue-100 absolute top-8 right-8" />
                            
                            <p className="text-gray-600 mb-8 relative leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-medium text-lg mr-4 border border-blue-100">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <h4 className="text-gray-900 font-medium">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-blue-600 text-sm">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
