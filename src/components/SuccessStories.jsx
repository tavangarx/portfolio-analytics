import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SuccessStories = () => {
    const stories = [
        {
            company: "Global Investments Ltd",
            metric: "40%",
            impact: "Increase in returns",
            description: "Implemented our platform across their $2B portfolio, achieving significant performance improvements within 6 months.",
            category: "Hedge Fund"
        },
        {
            company: "Alpha Capital",
            metric: "3x",
            impact: "Faster rebalancing",
            description: "Reduced their portfolio optimization time from days to hours while improving accuracy and precision.",
            category: "Asset Manager"
        },
        {
            company: "Quantum Advisors",
            metric: "85%",
            impact: "Cost reduction",
            description: "Automated their research process and enhanced their investment decision-making capabilities.",
            category: "Investment Advisor"
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
                        Success Stories
                    </h2>
                    <p className="text-xl text-gray-600">
                        See how leading firms transform their portfolios
                    </p>
                </motion.div>

                <div className="flex flex-nowrap overflow-x-auto gap-8 pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-wrap lg:justify-center snap-x snap-mandatory">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full min-w-[280px] max-w-sm flex-none snap-center lg:flex-1 bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm">
                                    {story.category}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-medium text-gray-900 mb-4">
                                {story.company}
                            </h3>
                            
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-blue-600 mr-2">
                                    {story.metric}
                                </span>
                                <span className="text-lg text-gray-600">
                                    {story.impact}
                                </span>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {story.description}
                            </p>

                            <motion.a
                                href="#"
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Learn more
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
                        View All Success Stories
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SuccessStories;
