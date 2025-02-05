import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    const faqs = [
        {
            question: "How does the portfolio optimization work?",
            answer: "Our platform uses advanced algorithms and machine learning to analyze your portfolio, considering factors like risk tolerance, investment goals, and market conditions to suggest optimal asset allocation strategies."
        },
        {
            question: "Can I integrate with my existing trading platforms?",
            answer: "Yes, we offer seamless integration with major trading platforms including Bloomberg Terminal, Interactive Brokers, and BlackRock Aladdin. Our API allows for custom integrations as well."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We provide 24/7 technical support, dedicated account managers for enterprise clients, comprehensive documentation, and regular training sessions to ensure you get the most out of our platform."
        },
        {
            question: "How do you handle data security?",
            answer: "We implement bank-grade security measures including end-to-end encryption, regular security audits, and comply with SOC 2 and ISO 27001 standards to ensure your data is always protected."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-medium text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about the platform
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full bg-white rounded-2xl p-6 flex justify-between items-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                            >
                                <span className="text-lg font-medium text-gray-900 text-left">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                                ) : (
                                    <Plus className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-white px-6 pb-6 text-gray-600 rounded-b-2xl border-x border-b border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
